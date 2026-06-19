import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function PortfolioPieChart() {
    const data = [
        { name: "Reliance", value: 35 },
        { name: "TCS", value: 25 },
        { name: "Infosys", value: 20 },
        { name: "HDFC", value: 20 },
    ];

    const COLORS = [
        "#22c55e",
        "#3b82f6",
        "#f59e0b",
        "#ef4444",
    ];

    return (
        <div className="bg-gradient-to-br from-[#0e1729] to-[#08111f] border border-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-2">
                Portfolio Allocation
            </h2>

            <p className="text-slate-400 mb-8">
                Diversification across major holdings
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Chart */}

                <div className="relative h-[400px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>

                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={90}
                                outerRadius={140}
                                paddingAngle={4}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />

                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Value */}

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

                        <h2 className="text-white text-3xl font-bold">
                            ₹12.4L
                        </h2>

                        <p className="text-slate-400">
                            Portfolio
                        </p>

                    </div>

                </div>

                {/* Breakdown */}

                <div className="space-y-5">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#111c33] rounded-xl p-5 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">

                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        backgroundColor: COLORS[index],
                                    }}
                                />

                                <span className="text-white font-medium">
                                    {item.name}
                                </span>

                            </div>

                            <span
                                className="font-bold text-lg"
                                style={{
                                    color: COLORS[index],
                                }}
                            >
                                {item.value}%
                            </span>

                        </div>
                    ))}

                    <div className="bg-[#111c33] rounded-xl p-5 mt-6">

                        <p className="text-slate-400">
                            Total Portfolio Value
                        </p>

                        <h2 className="text-green-400 text-4xl font-bold mt-2">
                            ₹12,45,678
                        </h2>

                    </div>

                </div>

            </div>

        </div>
    );
}