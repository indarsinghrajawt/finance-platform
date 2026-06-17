import { useState, useEffect } from "react";
import { getStockData } from "../api/stockApi";
import PredictionCard from "../components/PredictionCard";
import TechnicalIndicators from "../components/TechnicalIndicators";
import SentimentGauge from "../components/SentimentGauge";
import { Bell, Moon, User } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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

  const loadData = async () => {
    setLoading(true);
    const data = await getStockData(symbol);
    setStockInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [symbol]);

  const stockData = [
    { day: "Mon", price: 182 },
    { day: "Tue", price: 186 },
    { day: "Wed", price: 185 },
    { day: "Thu", price: 190 },
    { day: "Fri", price: 194 },
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

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

  return (
    <div
      className={`flex-1 p-6 overflow-x-hidden ${
        darkMode ? "bg-[#020817]" : "bg-white text-black"
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
            className="bg-[#0e1729] text-white px-4 py-3 rounded-xl w-72 border border-slate-700"
          />
          <button
            onClick={loadData}
            className="bg-green-600 px-6 py-3 rounded-xl text-white"
          >
            {loading ? "Loading..." : "Search"}
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

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700"
          >
            <User size={18} className="text-white" />
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

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-5 mb-6">
        <div className="bg-[#0e1729] rounded-xl p-5 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Current Stock</p>
          <h3 className="text-white text-3xl font-bold mt-2">{symbol}</h3>
          <p className="text-green-500 mt-2">
            {stockInfo?.["Meta Data"]?.["2. Symbol"]}
          </p>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Portfolio Value</p>
          <h3 className="text-white text-3xl font-bold mt-2">₹12,45,678</h3>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Best Performer</p>
          <h3 className="text-white text-2xl font-bold mt-2">Reliance</h3>
          <p className="text-green-500 mt-2">+4.35%</p>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 hover:scale-105 transition-all duration-300">
          <p className="text-slate-400">Market Sentiment</p>
          <h3 className="text-green-500 text-3xl font-bold mt-2">Bullish</h3>
          <p className="text-slate-300 mt-2">75/100</p>
        </div>
      </div>

      {/* Chart + News */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-[#0e1729] rounded-xl p-5">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Stock Price Analysis
          </h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveStockData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5 hover:scale-105 transition-all duration-300">
          <h3 className="text-white text-2xl font-semibold mb-6">
            Latest News
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-white">Reliance Q4 Results Beat Expectations</p>
              <span className="text-green-500">Bullish</span>
            </div>
            <div>
              <p className="text-white">Crude Oil Prices Surge</p>
              <span className="text-red-500">Bearish</span>
            </div>
            <div>
              <p className="text-white">RBI Keeps Interest Rates Unchanged</p>
              <span className="text-yellow-500">Neutral</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-[#0e1729] rounded-xl p-5 mb-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-white text-2xl mb-6">Portfolio Allocation</h3>

        <div className="grid grid-cols-2 gap-6 items-center">
          {/* Donut Chart */}
          <div className="h-[320px]">
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
          </div>

          {/* Portfolio Details */}
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
              <p className="text-green-500 text-3xl font-bold mt-2">
                ₹12,45,678
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Section */}
      <div className="grid grid-cols-3 gap-5">
        <PredictionCard />
        <TechnicalIndicators />
        <SentimentGauge />
      </div>

      {/* Watchlist */}
      <div className="bg-[#0e1729] rounded-xl p-5 mt-6">
        <h3 className="text-white text-xl mb-4">Watchlist</h3>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#111c33] p-4 rounded-lg hover:bg-[#182847] transition-all">
            <p className="text-white">RELIANCE</p>
            <p className="text-green-500">+1.48%</p>
          </div>

          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">TCS</p>
            <p className="text-green-500">+2.35%</p>
          </div>

          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">HDFC</p>
            <p className="text-green-500">+1.25%</p>
          </div>

          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">INFY</p>
            <p className="text-green-500">+0.98%</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-slate-500 border-t border-slate-800 pt-5">
        © 2026 Financial Intelligence Platform | Built by Indar Singh Rajawat
      </div>
    </div>
  );
}