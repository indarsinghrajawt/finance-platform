export default function SentimentGauge() {
    const sentiment = 75;

    return (<div className="bg-[#0e1729] rounded-2xl p-5 h-[320px] border border-slate-800 hover:shadow-xl transition-all">

        <h3 className="text-white text-xl font-bold mb-6">
            Market Sentiment
        </h3>

        <div className="flex flex-col items-center justify-center">

            <div className="relative">
                <div className="w-40 h-40 rounded-full border-[12px] border-slate-700"></div>

                <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-green-500 border-t-green-500 border-r-green-500"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-green-500 text-4xl font-bold">
                        {sentiment}%
                    </span>
                </div>
            </div>

            <p className="text-green-500 text-xl font-semibold mt-6">
                Bullish Market
            </p>

            <p className="text-slate-400 text-sm mt-2">
                Investor confidence remains strong
            </p>

            <div className="flex gap-4 mt-6">
                <div className="bg-[#111c33] px-4 py-2 rounded-lg">
                    <p className="text-slate-400 text-xs">
                        Positive
                    </p>
                    <p className="text-green-500 font-bold">
                        75%
                    </p>
                </div>

                <div className="bg-[#111c33] px-4 py-2 rounded-lg">
                    <p className="text-slate-400 text-xs">
                        Negative
                    </p>
                    <p className="text-red-500 font-bold">
                        25%
                    </p>
                </div>
            </div>

        </div>
    </div>

);
}
