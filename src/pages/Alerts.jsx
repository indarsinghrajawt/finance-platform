import { Bell, TrendingUp, AlertTriangle } from "lucide-react";

export default function Alerts() {
    const alerts = [
        {
            stock: "AAPL",
            target: "$220",
            status: "Active",
        },
        {
            stock: "TSLA",
            target: "$350",
            status: "Triggered",
        },
        {
            stock: "RELIANCE",
            target: "₹3000",
            status: "Active",
        },
        {
            stock: "TCS",
            target: "₹4200",
            status: "Pending",
        },
    ];

    return (
        <div className="flex-1 p-8 bg-[#020817] text-white min-h-screen">

            <h1 className="text-4xl font-bold mb-8">
                Stock Alerts
            </h1>

            {/* Stats Cards */}

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6">
                    <Bell size={30} className="text-blue-400 mb-3" />

                    <p className="text-slate-400">
                        Total Alerts
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        12
                    </h2>
                </div>

                <div className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6">
                    <TrendingUp size={30} className="text-green-500 mb-3" />

                    <p className="text-slate-400">
                        Triggered Today
                    </p>

                    <h2 className="text-3xl font-bold text-green-500 mt-2">
                        4
                    </h2>
                </div>

                <div className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6">
                    <AlertTriangle size={30} className="text-yellow-500 mb-3" />

                    <p className="text-slate-400">
                        Pending Alerts
                    </p>

                    <h2 className="text-3xl font-bold text-yellow-500 mt-2">
                        8
                    </h2>
                </div>

            </div>

            {/* Alert List */}

            <div className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Active Alerts
                </h2>

                <div className="space-y-4">

                    {alerts.map((alert, index) => (
                        <div
                            key={index}
                            className="bg-[#111c33] rounded-xl p-5 flex justify-between items-center hover:bg-[#16243d] transition-all"
                        >
                            <div>
                                <h3 className="text-xl font-bold">
                                    {alert.stock}
                                </h3>

                                <p className="text-slate-400">
                                    Target Price: {alert.target}
                                </p>
                            </div>

                            <span
                                className={`px-4 py-2 rounded-full text-sm font-bold ${alert.status === "Triggered"
                                        ? "bg-green-500/20 text-green-500"
                                        : alert.status === "Pending"
                                            ? "bg-yellow-500/20 text-yellow-500"
                                            : "bg-blue-500/20 text-blue-500"
                                    }`}
                            >
                                {alert.status}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

            {/* Alert History */}

            <div className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6 mt-8">

                <h2 className="text-2xl font-bold mb-4">
                    Alert History
                </h2>

                <div className="space-y-3">

                    <div className="text-green-500">
                        ✅ TSLA reached $350 target
                    </div>

                    <div className="text-green-500">
                        ✅ NVDA crossed $140 target
                    </div>

                    <div className="text-green-500">
                        ✅ RELIANCE crossed ₹2900
                    </div>

                </div>

            </div>

        </div>
    );
}