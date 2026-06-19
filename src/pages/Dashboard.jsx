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

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockInfo, setStockInfo] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved
      ? JSON.parse(saved)
      : [
        { symbol: "RELIANCE", price: 2912, change: "+4.35%" },
        { symbol: "TCS", price: 4120, change: "+2.10%" },
        { symbol: "HDFC", price: 1685, change: "+1.22%" },
        { symbol: "INFY", price: 1478, change: "+0.98%" },
      ];
  });

  const loadData = async () => {
    setLoading(true);
    const data = await getStockData(symbol);
    setStockInfo(data);
    setLoading(false);
  };

  const loadNews = async () => {
    try {
      const articles = await getNews();
      setNews(articles.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  const addToWatchlist = () => {
    if (!symbol || !stockInfo) return;

    const latestPrice = liveStockData[liveStockData.length - 1]?.price;

    const stockItem = {
      symbol: symbol.toUpperCase(),
      price: latestPrice,
      change: "+1.48%",
    };

    const exists = watchlist.find(
      (item) => item.symbol === stockItem.symbol
    );

    if (!exists) {
      setWatchlist([...watchlist, stockItem]);
    }
  };

  const removeFromWatchlist = (stock) => {
    setWatchlist(watchlist.filter((s) => s.symbol !== stock.symbol));
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("AI Financial Intelligence Platform", 20, 20);
    doc.setFontSize(14);
    doc.text(`Stock: ${symbol}`, 20, 40);
    doc.text("Portfolio Value: ₹12,45,678", 20, 50);
    doc.text(`Market Sentiment: Bullish`, 20, 60);
    doc.text(`AI Recommendation: ${aiSignal.action}`, 20, 70);
    doc.save("portfolio-report.pdf");
  };

  useEffect(() => {
    loadData();
    loadNews();
  }, [symbol]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const stockData = [
    { day: "15 May", price: 2850 },
    { day: "16 May", price: 2910 },
    { day: "17 May", price: 2880 },
    { day: "18 May", price: 2960 },
    { day: "19 May", price: 3010 },
    { day: "20 May", price: 3075 },
    { day: "21 May", price: 3120 },
  ];

  const portfolioData = [
    { name: "Reliance", value: 35 },
    { name: "TCS", value: 25 },
    { name: "Infosys", value: 20 },
    { name: "HDFC", value: 20 },
  ];

  const timeSeries = stockInfo?.["Time Series (Daily)"];

  const liveStockData = timeSeries
    ? Object.entries(timeSeries)
      .slice(0, 7)
      .reverse()
      .map(([date, value]) => ({
        day: date.slice(5),
        price: Number(value["4. close"]),
      }))
    : stockData;

  const getRecommendation = () => {
    if (!liveStockData || liveStockData.length < 2) {
      return { action: "HOLD", confidence: 50, color: "yellow" };
    }
    const latest = liveStockData[liveStockData.length - 1].price;
    const previous = liveStockData[liveStockData.length - 2].price;
    if (latest > previous) return { action: "BUY", confidence: 85, color: "green" };
    if (latest < previous) return { action: "SELL", confidence: 80, color: "red" };
    return { action: "HOLD", confidence: 60, color: "yellow" };
  };

  const aiSignal = getRecommendation();

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

  return (
    <div
      className={`flex-1 p-6 overflow-x-hidden ${darkMode ? "bg-[#020817]" : "bg-white text-black"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="Search Stocks..."
            className="bg-[#0f172a] border border-slate-700 text-white px-5 py-3 rounded-2xl w-80 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={loadData}
            className="bg-green-600 px-6 py-3 rounded-xl text-white"
          >
            {loading ? "Loading..." : "Search"}
          </button>
          <button
            onClick={addToWatchlist}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition-all"
          >
            + Add
          </button>
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

          {/* ✅ FIX 1: Profile button jo setShowProfile(true) call kare */}
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="bg-indigo-600 hover:bg-indigo-700 w-10 h-10 rounded-full text-white font-bold transition-all"
            title="Profile"
          >
            I
          </button>
        </div>
      </div>

      {showNotifications && (
        <div className="absolute right-32 top-24 bg-[#111c33] p-4 rounded-xl z-50">
          <p className="text-white">No New Notifications</p>
        </div>
      )}

      {showProfile && (
        <div className="absolute right-10 top-24 bg-[#111c33] p-4 rounded-xl shadow-xl z-50">
          <h3 className="text-white font-bold">Indar Singh Rajawat</h3>
          <p className="text-slate-400">AI & Data Science Student</p>
        </div>
      )}

      <h1 className="text-white text-4xl font-bold mb-8">
        Financial Intelligence Dashboard
      </h1>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-green-500 rounded-3xl p-8 mb-6 shadow-xl">
        <h2 className="text-white text-3xl font-bold">Welcome Back, Indar 👋</h2>
        <p className="text-white mt-2">
          Track stocks, portfolio performance and AI predictions.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-6 gap-5 mb-6">
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Current Stock</p>
          <h3 className="text-white text-3xl font-bold mt-2">{symbol}</h3>
          <p className="text-green-500 mt-2">
            {stockInfo?.["Meta Data"]?.["2. Symbol"]}
          </p>
        </div>
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Portfolio Value</p>
          <h3 className="text-white text-3xl font-bold mt-2">₹12,45,678</h3>
        </div>
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">Best Performer</p>
          <h3 className="text-white text-2xl font-bold mt-2">Reliance</h3>
          <p className="text-green-500 mt-2">+4.35%</p>
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
        <div className="bg-[#0e1729] rounded-2xl p-5 border border-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all">
          <p className="text-slate-400">AI Market Score</p>
          <h3 className="text-green-500 text-3xl font-bold mt-2">87/100</h3>
          <p className="text-slate-300 mt-2">Strong Bullish Signal</p>
        </div>
      </div>

      {/* Chart + News */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-[#0e1729] rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-white text-2xl font-semibold">
                Stock Price Analysis
              </h3>
              <p className="text-slate-400">{symbol} • Live Market Trend</p>
            </div>
            <div className="text-right">
              <p className="text-white text-3xl font-bold">
                ₹{liveStockData[liveStockData.length - 1]?.price}
              </p>
              <p className="text-green-500">+4.26%</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl overflow-hidden">
            <TradingChart />
          </div>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 min-h-[430px]">
          <h3 className="text-white text-2xl font-semibold mb-6">Latest News</h3>
          <div className="space-y-6">
            {news.map((item, index) => (
              <div key={index}>
                <p className="text-white">{item.title}</p>
                <span className="text-green-500">{item.source?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-[#0e1729] rounded-xl p-5 mb-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-white text-2xl mb-6">Portfolio Allocation</h3>
        <div className="grid grid-cols-2 gap-6 items-center">

          {/* ✅ FIX 3: relative wrapper + center value overlay */}
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

            {/* Center overlay */}
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

      {/* Market Movers */}
      <div className="bg-[#0e1729] rounded-xl p-5 mt-6">
        <h3 className="text-white text-xl mb-4">Top Market Movers</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">NVDA</p>
            <p className="text-green-500">+6.21%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">META</p>
            <p className="text-green-500">+4.85%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">TSLA</p>
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
          <p className="text-slate-400 text-center py-6">
            No stocks in watchlist. Search and click " + Add" to add stocks.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {watchlist.map((stock, index) => (
              <div key={index} className="bg-[#111c33] p-4 rounded-xl hover:border hover:border-indigo-500 transition-all">
                <div className="flex justify-between">
                  <h3 className="text-white font-bold">{stock}</h3>
                  
                </div>
                <p className="text-green-500 mt-2">₹ 2,912.40</p>
                <p className="text-green-400 text-sm">+1.48%</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Save Portfolio + Export PDF */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => {
            localStorage.setItem(
              "portfolio",
              JSON.stringify(portfolioData)
            );
            alert("Portfolio Saved!");
          }}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold transition-all"
        >
          Save Portfolio
        </button>
        <button
          onClick={exportPDF}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition-all"
        >
          Export PDF
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800 pt-6 text-center">
        <p className="text-slate-400">
          © 2026 AI Financial Intelligence Platform
        </p>
        <p className="text-indigo-400 mt-2">
          Built by Indar Singh Rajawat
        </p>
      </footer>
    </div>
  );
}