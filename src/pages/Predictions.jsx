export default function Predictions() {
    return (
        <div className="flex-1 p-8 text-white bg-[#020817] min-h-screen">

            <h1 className="text-4xl font-bold mb-8">
                AI Predictions
            </h1>

            {/* Prediction Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Current Price</p>
                    <h2 className="text-3xl font-bold mt-2">
                        ₹3,050
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">7 Day Prediction</p>
                    <h2 className="text-3xl font-bold text-green-500 mt-2">
                        ₹3,210
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">30 Day Prediction</p>
                    <h2 className="text-3xl font-bold text-green-500 mt-2">
                        ₹3,450
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Confidence</p>
                    <h2 className="text-3xl font-bold text-blue-500 mt-2">
                        82%
                    </h2>
                </div>

            </div>

            {/* AI Forecast */}
            <div className="bg-[#0e1729] p-8 rounded-2xl mb-8">

                <h2 className="text-2xl font-bold mb-6">
                    AI Forecast Summary
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between">
                        <span>Expected Growth</span>
                        <span className="text-green-500 font-bold">
                            +5.2%
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>Risk Level</span>
                        <span className="text-yellow-400 font-bold">
                            Medium
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>Market Trend</span>
                        <span className="text-green-500 font-bold">
                            Bullish
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>Recommendation</span>
                        <span className="text-green-500 font-bold">
                            BUY
                        </span>
                    </div>

                </div>

            </div>

            {/* Confidence Bar */}

            <div className="bg-[#0e1729] p-8 rounded-2xl">

                <h2 className="text-2xl font-bold mb-4">
                    Prediction Confidence
                </h2>

                <div className="w-full bg-slate-700 rounded-full h-5">
                    <div
                        className="bg-green-500 h-5 rounded-full"
                        style={{ width: "82%" }}
                    />
                </div>

                <p className="mt-4 text-green-500 font-bold">
                    82% Confidence Score
                </p>

            </div>

        </div>
    );
}