import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Briefcase,
  LineChart,
  Settings,
  Newspaper,
  Star,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Market Overview", icon: BarChart3, path: "/market" },
    { name: "Stock Analysis", icon: TrendingUp, path: "/analysis" },
    { name: "Predictions", icon: LineChart, path: "/predictions" },
    { name: "News Sentiment", icon: Newspaper, path: "/news" },
    { name: "Portfolio", icon: Briefcase, path: "/portfolio" },
    { name: "Watchlist", icon: Star, path: "/watchlist" },
    { name: "Alerts", icon: Bell, path: "/alerts" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="w-72 h-screen sticky top-0 bg-[#071122] border-r border-[#16243d] p-4 flex flex-col overflow-y-auto">

      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold">
          AI Financial
        </h1>

        <p className="text-slate-400 text-sm">
          Intelligence Platform
        </p>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === item.path
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-[#111c33] hover:text-white"
                }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Cards */}
      <div className="mt-auto space-y-4 pt-6">

        <div className="bg-[#111827] rounded-2xl p-4 shadow-md">
          <h3 className="text-white font-semibold text-lg">
            Market Status
          </h3>

          <p className="text-green-500 font-bold mt-3 text-xl">
            Open
          </p>

          <p className="text-slate-400 text-sm">
            Next Close: 03:30 PM
          </p>
        </div>

        <div className="bg-[#111827] rounded-2xl p-4 shadow-md">
          <h3 className="text-white font-semibold text-lg">
            Model Accuracy
          </h3>

          <p className="text-green-400 text-4xl font-bold mt-3">
            87.6%
          </p>

          <p className="text-green-500 text-sm mt-2">
            +2.4% vs last week
          </p>
        </div>

      </div>
    </div>
  );
}