import { useState } from "react";
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

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

  return (
    <div className="flex-1 p-6 overflow-x-hidden">

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
          <button className="bg-green-600 px-6 py-3 rounded-xl text-white">
            Search
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

          <button className="bg-[#0e1729] p-3 rounded-full hover:bg-slate-800">
            <Bell size={18} className="text-white" />
          </button>

          <button className="bg-[#0e1729] p-3 rounded-full hover:bg-slate-800">
            <Moon size={18} className="text-white" />
          </button>

          <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700">
            <User size={18} className="text-white" />
          </button>
        </div>
      </div>

      <h1 className="text-white text-4xl font-bold mb-8">
        AI Financial Intelligence Dashboard
      </h1>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-5 mb-6">
        <div className="bg-[#0e1729] rounded-xl p-5">
          <p className="text-slate-400">Current Stock</p>
          <h3 className="text-white text-3xl font-bold mt-2">{symbol}</h3>
          <p className="text-green-500 mt-2">$194</p>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5">
          <p className="text-slate-400">Portfolio Value</p>
          <h3 className="text-white text-3xl font-bold mt-2">₹12,45,678</h3>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5">
          <p className="text-slate-400">Best Performer</p>
          <h3 className="text-white text-2xl font-bold mt-2">Reliance</h3>
          <p className="text-green-500 mt-2">+4.35%</p>
        </div>

        <div className="bg-[#0e1729] rounded-xl p-5">
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
              <LineChart data={stockData}>
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

      {/* Portfolio */}
      <div className="bg-[#0e1729] rounded-xl p-5 mb-6">
        <h3 className="text-white text-2xl mb-4">Portfolio Allocation</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={portfolioData} dataKey="value" outerRadius={120} label>
                {portfolioData.map((item, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
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
        <h3 className="text-white text-2xl mb-4">Watchlist</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">AAPL</p>
            <p className="text-green-500">+2.4%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">TSLA</p>
            <p className="text-red-500">-1.2%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">NVDA</p>
            <p className="text-green-500">+3.8%</p>
          </div>
          <div className="bg-[#111c33] p-4 rounded-lg">
            <p className="text-white">MSFT</p>
            <p className="text-green-500">+1.9%</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-slate-500 border-t border-slate-800 pt-5">
        © 2026 AI Financial Intelligence Platform | Built by Indar Singh Rajawat
      </div>

    </div>
  );
}