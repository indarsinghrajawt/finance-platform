export default function SentimentGauge() {
    return (
        <div className="bg-[#0e1729] rounded-xl p-5 h-[300px]">
            <h3 className="text-white text-xl font-bold mb-4">
                Market Sentiment
            </h3>

            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
                    <span className="text-green-500 text-3xl font-bold">
                        75%
                    </span>
                </div>

                <p className="text-green-500 mt-4 font-semibold">
                    Bullish
                </p>
            </div>
        </div>
    );
}