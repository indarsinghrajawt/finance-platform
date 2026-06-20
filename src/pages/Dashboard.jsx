import { useState, useEffect } from "react";
import { getStockData } from "../api/stockApi";
import { getNews } from "../api/newsApi";
import PredictionCard from "../components/PredictionCard";
import TechnicalIndicators from "../components/TechnicalIndicators";
import SentimentGauge from "../components/SentimentGauge";
import AIRecommendation from "../components/AIRecommendation";
import TradingChart from "../components/TradingChart";
import { Bell, Moon } from "lucide-react";
import jsPDF from "jspdf";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const INDIAN_STOCKS = ["RELIANCE", "TCS", "INFY", "HDFC", "WIPRO", "BAJAJ", "NIFTY", "SENSEX"];

export default function Dashboard() {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockInfo, setStockInfo] = useState(null);
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [stockPrice, setStockPrice] = useState("--");
  const [lastUpdated, setLastUpdated] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [news, setNews] = useState([]);
  const [user, setUser] = useState(null);

  const [recentSearches, setRecentSearches] = useState(
    () => JSON.parse(localStorage.getItem("recentSearches") || "[]")
  );
  const [watchlist, setWatchlist] = useState([
    { symbol: "RELIANCE", price: 2912.40, change: "+1.48%" },
    { symbol: "TCS", price: 4120.50, change: "+2.10%" },
    { symbol: "HDFC", price: 1685.25, change: "+0.95%" },
    { symbol: "INFY", price: 1478.80, change: "+1.22%" },
  ]);

  // ✅ Currency fix helper
  const isIndianStock = (s) => INDIAN_STOCKS.includes(s?.toUpperCase());
  const formatPrice = (price, stock) =>
    price !== "--" ? `${isIndianStock(stock) ? "₹" : "$"}${price}` : "--";

  const loadData = async () => {
    const data = await getStockData(symbol);
    setStockInfo(data);
    setSelectedStock(symbol.toUpperCase());
    setStockPrice(data?.c || "--");
    setLastUpdated(new Date().toLocaleTimeString());
  };

  const loadNews = async () => {
    try {
      const articles = await getNews();
      setNews(articles.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (!symbol) return;
    const upper = symbol.toUpperCase();
    const updated = [upper, ...recentSearches.filter((s) => s !== upper)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    loadData();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Financial Intelligence Platform", 20, 20);
    doc.setFontSize(14);
    doc.text(`Stock: ${symbol}`, 20, 40);
    doc.text("Portfolio Value: ₹12,45,678", 20, 50);
    doc.text(`Market Sentiment: Bullish`, 20, 60);
    doc.text(`AI Recommendation: ${aiSignal.action}`, 20, 70);
    doc.save("portfolio-report.pdf");
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("loginTime");
    window.location.href = "/";
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");

    if (loginTime) {
      const twentyFourHours = 24 * 60 * 60 * 1000;

      if (Date.now() - Number(loginTime) > twentyFourHours) {
        localStorage.removeItem("loginTime");
        signOut(auth);
        window.location.href = "/";
      }
    }
  }, []);

  useEffect(() => {
    loadData();
    loadNews();
  }, []);

  const portfolioData = [
    { name: "Reliance", value: 35 },
    { name: "TCS", value: 25 },
    { name: "Infosys", value: 20 },
    { name: "HDFC", value: 20 },
  ];

  const getRecommendation = () => {
    const change = stockInfo?.d;
    if (change === undefined || change === null) return { action: "HOLD", confidence: 50, color: "yellow" };
    if (change > 0) return { action: "BUY", confidence: 85, color: "green" };
    if (change < 0) return { action: "SELL", confidence: 80, color: "red" };
    return { action: "HOLD", confidence: 60, color: "yellow" };
  };

  const aiSignal = getRecommendation();
  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

  // ✅ Best Performer - dynamic from watchlist
  const bestPerformer = watchlist.reduce((a, b) =>
    parseFloat(a.change) > parseFloat(b.change) ? a : b
  );

  return (
    <div className={`flex-1 p-6 overflow-x-hidden ${darkMode ? "bg-[#020817]" : "bg-white text-black"}`}>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search Stocks..."
              className="bg-[#0f172a] border border-slate-700 text-white px-5 py-3 rounded-2xl w-80 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white"
            >
              Search
            </button>
          </div>

          {/* ✅ Recent Searches with Clear */}
          {recentSearches.length > 0 && (
            <div className="flex gap-2 items-center">
              <span className="text-slate-500 text-xs">Recent:</span>
              {recentSearches.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setSymbol(s); }}
                  className="text-xs bg-[#0e1729] text-indigo-400 px-3 py-1 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                >
                  {s}
                </button>
              ))}
              {/* ✅ Clear recent searches */}
              <button
                onClick={() => {
                  localStorage.removeItem("recentSearches");
                  setRecentSearches([]);
                }}
                className="text-red-400 text-xs hover:text-red-500 transition-colors"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#0e1729] p-3 rounded-xl">
            <p className="text-slate-400 text-sm">NIFTY 50</p>
            <p className="text-green-500 font-bold">22,530.70</p>
          </div>
          <div className="bg-[#0e1729] p-3 rounded-xl">
            <p className="text-slate-400 text-sm">SENSEX</p>
            <p className="text-green-500 font-bold">74,108.35</p>
          </div>
          <div className="bg-[#0e1729] p-3 rounded-xl">
            <p className="text-slate-400 text-sm">USD/INR</p>
            <p className="text-red-500 font-bold">83.12</p>
          </div>

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-[#0e1729] p-3 rounded-full"
          >
            <Bell size={18} className="text-white" />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-[#0e1729] p-3 rounded-full"
          >
            <Moon size={18} className="text-white" />
          </button>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="bg-indigo-600 hover:bg-indigo-700 w-10 h-10 rounded-full text-white font-bold transition-all"
          >
            {(user?.displayName || user?.email || "U").charAt(0).toUpperCase()}
          </button>
        </div>
      </div>

      {showNotifications && (
        <div className="absolute right-32 top-24 bg-[#111c33] p-4 rounded-xl z-50 shadow-xl">
          <p className="text-white">No New Notifications</p>
        </div>
      )}

      {showProfile && (
        <div className="absolute right-10 top-24 bg-[#111c33] p-4 rounded-xl shadow-xl z-50 w-64">
          <h2 className="text-white font-bold text-lg">
            {user?.displayName || user?.email?.split("@")[0] || "User"}
          </h2>

          <button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
      )}

      <h1 className="text-white text-4xl font-bold mb-8">
        Financial Intelligence Dashboard
      </h1>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-green-500 rounded-3xl p-8 mb-6 shadow-xl">
        <h2 className="text-white text-3xl font-bold">
          Welcome Back, {user?.email?.split("@")[0] || "User"} 👋
        </h2>
        <p className="text-white mt-2">
          Track stocks, portfolio performance and AI predictions.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-6 gap-5 mb-6">
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Current Stock</p>
          <h3 className="text-white text-3xl font-bold mt-2">{selectedStock}</h3>

          {/* ✅ Currency fix - INR for Indian, USD for US */}
          <p className="text-green-500 mt-1 text-lg font-semibold">
            {formatPrice(stockPrice, selectedStock)}
          </p>

          {/* ✅ Change color */}
          {stockInfo?.dp != null && (
            <p className="mt-1">
              {stockInfo.dp > 0 ? (
                <span className="text-green-500">▲ {stockInfo.dp.toFixed(2)}%</span>
              ) : (
                <span className="text-red-500">▼ {Math.abs(stockInfo.dp).toFixed(2)}%</span>
              )}
            </p>
          )}

          {/* ✅ Live badge */}
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500 text-xs">LIVE</span>
          </div>

          <p className="text-slate-400 text-xs mt-1">Updated: {lastUpdated}</p>
        </div>

        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Portfolio Value</p>
          <h3 className="text-white text-3xl font-bold mt-2">₹12,45,678</h3>
        </div>
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Best Performer</p>
          <h3 className="text-white text-2xl font-bold mt-2">{bestPerformer.symbol}</h3>
          <p className="text-green-500 mt-2">{bestPerformer.change}</p>
        </div>
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Market Sentiment</p>
          <h3 className="text-green-500 text-3xl font-bold mt-2">Bullish</h3>
          <p className="text-slate-300 mt-2">75/100</p>
        </div>
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">AI Accuracy</p>
          <h3 className="text-green-500 text-3xl font-bold mt-2">87.6%</h3>
        </div>
        {/* ✅ Portfolio Growth Card */}
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Portfolio Growth</p>
          <h3 className="text-green-500 text-3xl font-bold mt-2">+12.8%</h3>
          <p className="text-slate-400 text-sm mt-1">This Month</p>
        </div>
      </div>

      {/* Chart + News */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-[#0e1729] rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-white text-2xl font-semibold">Stock Price Analysis</h3>
              <p className="text-slate-400">{symbol} • Live Market Trend</p>
            </div>
            <div className="text-right">
              <p className="text-white text-3xl font-bold">
                {stockInfo?.c ? formatPrice(stockInfo.c, selectedStock) : "Loading..."}
              </p>
              <p className={stockInfo?.dp >= 0 ? "text-green-500" : "text-red-500"}>
                {stockInfo?.dp ? `${stockInfo.dp.toFixed(2)}%` : "--"}
              </p>
            </div>
          </div>
          <div className="h-[500px] rounded-xl overflow-hidden">
            <TradingChart />
          </div>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 min-h-[430px]">
          <h3 className="text-white text-2xl font-semibold mb-6">Latest News</h3>
          <div className="space-y-6">
            {news.map((item, index) => (
              <div key={index} className="border-b border-slate-800 pb-4 last:border-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  {item.title}
                </a>
                <span className="block text-green-500 text-sm mt-1">{item.source?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-[#0e1729] rounded-xl p-5 mb-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-white text-2xl mb-6">Portfolio Allocation</h3>
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="relative h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={5}
                  label
                >
                  {portfolioData.map((item, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h2 className="text-white text-3xl font-bold">₹12.4L</h2>
              <p className="text-slate-400">Portfolio</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-[#111c33] p-4 rounded-lg flex justify-between">
              <span className="text-white">Reliance</span>
              <span className="text-green-500">35%</span>
            </div>
            <div className="bg-[#111c33] p-4 rounded-lg flex justify-between">
              <span className="text-white">TCS</span>
              <span className="text-blue-400">25%</span>
            </div>
            <div className="bg-[#111c33] p-4 rounded-lg flex justify-between">
              <span className="text-white">Infosys</span>
              <span className="text-yellow-400">20%</span>
            </div>
            <div className="bg-[#111c33] p-4 rounded-lg flex justify-between">
              <span className="text-white">HDFC</span>
              <span className="text-red-400">20%</span>
            </div>
            <div className="bg-[#111c33] p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Total Portfolio Value</p>
              <p className="text-green-500 text-3xl font-bold mt-2">₹12,45,678</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Section */}
      <div className="grid grid-cols-4 gap-5">
        <PredictionCard />
        <TechnicalIndicators />
        <SentimentGauge />
        <AIRecommendation
          action={aiSignal.action}
          confidence={aiSignal.confidence}
          color={aiSignal.color}
        />
      </div>

      {/* Market Movers */}
      <div className="bg-[#0e1729] rounded-xl p-5 mt-6">
        <h3 className="text-white text-xl mb-4">Top Market Movers</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-slate-400 text-xs mb-1">Top Gainer</p>
            <p className="text-white font-bold">NVDA</p>
            <p className="text-green-500">+6.21%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-slate-400 text-xs mb-1">Top Gainer</p>
            <p className="text-white font-bold">META</p>
            <p className="text-green-500">+4.85%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-slate-400 text-xs mb-1">Top Loser</p>
            <p className="text-white font-bold">TSLA</p>
            <p className="text-red-500">-2.14%</p>
          </div>
        </div>
      </div>

      {/* Watchlist */}
      <div className="bg-[#0e1729] rounded-xl p-5 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-xl">Watchlist</h3>
          <span className="text-slate-400 text-sm">{watchlist.length} stocks</span>
        </div>

        {watchlist.length === 0 ? (
          <p className="text-slate-400 text-center py-6">No stocks in watchlist.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {watchlist.map((stock, index) => (
              <div key={index} className="bg-[#111c33] p-4 rounded-xl hover:border hover:border-indigo-500 transition-all">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold">{stock.symbol}</h3>
                </div>
                <p className="text-green-500 mt-2">
                  {formatPrice(stock.price, stock.symbol)}
                </p>
                <p className={`text-sm ${stock.change.includes("-") ? "text-red-500" : "text-green-400"}`}>
                  {stock.change}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold transition-all">
          Save Portfolio
        </button>
        <button
          onClick={exportPDF}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition-all"
        >
          Export PDF
        </button>
      </div>

      {/* ✅ Footer Upgraded */}
      <footer className="mt-12 border-t border-slate-800 pt-6 text-center">
        <p className="text-slate-400">© 2026 Financial Intelligence Platform</p>
        <p className="text-indigo-400 mt-2">Built by Indar Singh Rajawat</p>
      </footer>
    </div>
  );
}