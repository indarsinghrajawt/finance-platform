import React from "react";

export default function Predictions() {
    return (<div className="flex-1 p-8 bg-[#020817] text-white min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
            AI Stock Predictions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-slate-400">Predicted Price</h3>
                <p className="text-3xl font-bold text-green-400 mt-2">
                    ₹3,210
                </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-slate-400">Expected Growth</h3>
                <p className="text-3xl font-bold text-green-400 mt-2">
                    +5.2%
                </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-slate-400">Confidence</h3>
                <p className="text-3xl font-bold text-blue-400 mt-2">
                    82%
                </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-slate-400">Signal</h3>
                <p className="text-3xl font-bold text-green-400 mt-2">
                    STRONG BUY
                </p>
            </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">
                    Technical Indicators
                </h3>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>MA 50</span>
                        <span className="text-green-400">Bullish</span>
                    </div>

                    <div className="flex justify-between">
                        <span>MA 200</span>
                        <span className="text-green-400">Bullish</span>
                    </div>

                    <div className="flex justify-between">
                        <span>RSI</span>
                        <span className="text-yellow-400">Neutral</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">
                    Market Sentiment
                </h3>

                <div className="text-center">
                    <p className="text-5xl font-bold text-green-400">
                        75%
                    </p>

                    <p className="mt-4 text-slate-400">
                        Bullish Market
                    </p>
                </div>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">
                    AI Recommendation
                </h3>

                <div className="text-center">
                    <p className="text-4xl font-bold text-green-400">
                        BUY
                    </p>

                    <p className="mt-4 text-slate-400">
                        Recommendation generated using AI trend analysis.
                    </p>
                </div>
            </div>

        </div>
    </div>

    );
}
