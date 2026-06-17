import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Newspaper,
  Briefcase,
  LineChart,
  Star,
  Bell,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Market Overview", icon: BarChart3 },
    { name: "Stock Analysis", icon: TrendingUp },
    { name: "Predictions", icon: LineChart },
    { name: "News Sentiment", icon: Newspaper },
    { name: "Portfolio", icon: Briefcase },
    { name: "Watchlist", icon: Star },
    { name: "Alerts", icon: Bell },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0e1729] border-r border-[#1b2b4b] p-5 flex-shrink-0 flex flex-col">

      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">
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
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                index === 0
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Cards */}
      <div className="mt-auto">

        {/* Market Status */}
        <div className="mt-6 bg-[#111827] p-4 rounded-xl">
          <h3 className="text-white font-semibold">
            Market Status
          </h3>

          <p className="text-green-500 mt-2 font-semibold">
            Open
          </p>

          <p className="text-slate-400 text-sm">
            Next Close: 03:30 PM
          </p>
        </div>

        {/* AI Accuracy */}
        <div className="mt-4 bg-[#111827] p-4 rounded-xl">
          <h3 className="text-white font-semibold">
            AI Model Accuracy
          </h3>

          <p className="text-green-500 text-2xl font-bold mt-2">
            87.6%
          </p>

          <p className="text-slate-400 text-sm">
            +2.4% vs last week
          </p>
        </div>

      </div>
      <div className="bg-[#111c33] rounded-xl p-4 mt-8">
  <h3 className="text-white font-bold">
    Market Status
  </h3>

  <p className="text-green-500 mt-2">
    Open
  </p>

  <p className="text-slate-400 text-sm">
    Next Close 03:30 PM
  </p>
</div>

<div className="bg-[#111c33] rounded-xl p-4 mt-4">
  <h3 className="text-white font-bold">
    AI Model Accuracy
  </h3>

  <p className="text-green-500 text-3xl mt-2">
    87.6%
  </p>
</div>
    </div>
  );
}