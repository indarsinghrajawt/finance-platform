import { useEffect, useState } from "react";
import { getStockData } from "../api/stockApi";
import PredictionCard from "../components/PredictionCard";
import TechnicalIndicators from "../components/TechnicalIndicators";
import SentimentGauge from "../components/SentimentGauge";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [symbol, setSymbol] = useState("AAPL");
  const [stockInfo, setStockInfo] = useState(null);

  const loadData = async (stockSymbol) => {
    try {
      const data = await getStockData(stockSymbol);
      console.log(data);
      setStockInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData("AAPL");
  }, []);

  const timeSeries = stockInfo?.["Time Series (Daily)"];

  const stockData = timeSeries
    ? Object.entries(timeSeries)
        .slice(0, 7)
        .reverse()
        .map(([date, value]) => ({
          day: date.slice(5),
          price: Number(value["4. close"]),
        }))
    : [
        { day: "Mon", price: 180 },
        { day: "Tue", price: 185 },
        { day: "Wed", price: 183 },
        { day: "Thu", price: 188 },
        { day: "Fri", price: 192 },
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
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="Search Stock..."
            className="bg-[#0e1729] text-white px-4 py-3 rounded-xl border border-[#1b2b4b] outline-none"
          />

          <button
            onClick={() => loadData(symbol)}
            className="bg-green-600 px-4 py-3 rounded-xl text-white"
          >
            Search
          </button>
        </div>

        <div className="flex gap-4 flex-wrap">
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
        </div>
      </div>

      <h2 className="text-white text-3xl font-bold mb-6">
        AI Financial Intelligence Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-[#0e1729] p-5 rounded-xl">
          <p className="text-slate-400">Current Stock</p>
          <h3 className="text-white text-2xl font-bold">{symbol}</h3>

          <p className="text-green-500 mt-2">
            {stockData.length
              ? `$${stockData[stockData.length - 1].price}`
              : "Loading..."}
          </p>
        </div>

        <div className="bg-[#0e1729] p-5 rounded-xl">
          <p className="text-slate-400">Portfolio Value</p>
          <h3 className="text-white text-2xl font-bold">₹12,45,678</h3>
        </div>

        <div className="bg-[#0e1729] p-5 rounded-xl">
          <p className="text-slate-400">Best Performer</p>
          <h3 className="text-white text-xl font-bold">Reliance</h3>
        </div>

        <div className="bg-[#0e1729] p-5 rounded-xl">
          <p className="text-slate-400">Market Sentiment</p>
          <h3 className="text-green-500 text-xl font-bold">Bullish</h3>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 bg-[#0e1729] p-5 rounded-xl">
        <h3 className="text-white text-xl mb-4">Stock Price Analysis</h3>

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

      {/* Pie Chart */}
      <div className="mt-6 bg-[#0e1729] p-5 rounded-xl">
        <h3 className="text-white text-xl mb-4">Portfolio Allocation</h3>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {portfolioData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        <PredictionCard />
        <TechnicalIndicators />
        <SentimentGauge />
      </div>
    </div>
  );
}