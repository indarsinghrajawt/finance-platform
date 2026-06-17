import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Newspaper,
  Briefcase,
} from "lucide-react";
export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Market Overview", icon: BarChart3 },
    { name: "Stock Analysis", icon: TrendingUp },
    { name: "News Sentiment", icon: Newspaper },
    { name: "Portfolio", icon: Briefcase },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0e1729] border-r border-[#1b2b4b] p-5 flex-shrink-0">
      <h1 className="text-white text-3xl font-bold mb-8">
        AI Financial
      </h1>

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
    </div>
  );
}