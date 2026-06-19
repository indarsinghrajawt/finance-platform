import { useState } from "react";

export default function Watchlist() {
    const [stocks] = useState([
        {
            symbol: "AAPL",
            price: "$214.82",
            change: "+2.1%",
        },
        {
            symbol: "TSLA",
            price: "$328.15",
            change: "-1.3%",
        },
        {
            symbol: "NVDA",
            price: "$145.92",
            change: "+4.7%",
        },
        {
            symbol: "RELIANCE",
            price: "₹2912",
            change: "+3.4%",
        },
        {
            symbol: "TCS",
            price: "₹4120",
            change: "+1.9%",
        },
        {
            symbol: "INFY",
            price: "₹1628",
            change: "+2.2%",
        },
    ]);

    return (
        <div className="flex-1 p-8 bg-[#020817] text-white min-h-screen">

            <h1 className="text-4xl font-bold mb-8">
                Watchlist
            </h1>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-[#0e1729] p-6 rounded-2xl border border-slate-800">
                    <p className="text-slate-400">
                        Total Stocks
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {stocks.length}
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl border border-slate-800">
                    <p className="text-slate-400">
                        Gainers
                    </p>

                    <h2 className="text-3xl font-bold text-green-500 mt-2">
                        5
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl border border-slate-800">
                    <p className="text-slate-400">
                        Losers
                    </p>

                    <h2 className="text-3xl font-bold text-red-500 mt-2">
                        1
                    </h2>
                </div>

            </div>

            {/* Watchlist Grid */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {stocks.map((stock, index) => (
                    <div
                        key={index}
                        className="bg-[#0e1729] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition-all"
                    >
                        <div className="flex justify-between items-center">

                            <h3 className="text-2xl font-bold">
                                {stock.symbol}
                            </h3>

                            <span
                                className={`font-bold ${stock.change.includes("-")
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                            >
                                {stock.change}
                            </span>

                        </div>

                        <p className="text-slate-400 mt-4">
                            Current Price
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            {stock.price}
                        </h2>

                        <div className="mt-5">
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                Tracking Active
                            </span>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}