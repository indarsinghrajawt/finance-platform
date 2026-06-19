export default function StockAnalysis() {
    return (
        <div className="flex-1 p-8 text-white bg-[#020817] min-h-screen">

            <h1 className="text-4xl font-bold mb-8">
                Stock Analysis
            </h1>

            {/* Search */}
            <div className="bg-[#0e1729] p-6 rounded-2xl mb-8">
                <input
                    type="text"
                    placeholder="Search Stock..."
                    className="w-full bg-[#111827] p-4 rounded-xl outline-none"
                />
            </div>

            {/* Trading View Chart */}
            <div className="bg-[#0e1729] p-6 rounded-2xl mb-8">
                <h2 className="text-2xl font-bold mb-4">
                    Live Stock Chart
                </h2>

                <div className="h-[500px] rounded-xl overflow-hidden">
                    <iframe
                        title="TradingView Chart"
                        src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:AAPL&interval=D&theme=dark"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    />
                </div>
            </div>

            {/* Indicators */}
            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">
                        RSI
                    </h3>

                    <p className="text-yellow-400 text-4xl font-bold">
                        62.4
                    </p>

                    <p className="text-slate-400 mt-2">
                        Neutral Bullish
                    </p>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">
                        MACD
                    </h3>

                    <p className="text-green-500 text-4xl font-bold">
                        Bullish
                    </p>

                    <p className="text-slate-400 mt-2">
                        Buy Momentum
                    </p>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">
                        AI Recommendation
                    </h3>

                    <p className="text-green-500 text-4xl font-bold">
                        BUY
                    </p>

                    <p className="text-slate-400 mt-2">
                        Confidence 85%
                    </p>
                </div>

            </div>

        </div>
    );
}