export default function NewsSentiment() {
    const news = [
        {
            title: "Reliance gains after strong quarterly results",
            sentiment: "Positive",
        },
        {
            title: "Tech stocks rally as AI demand increases",
            sentiment: "Positive",
        },
        {
            title: "Global inflation concerns impact markets",
            sentiment: "Negative",
        },
        {
            title: "Banking sector remains stable",
            sentiment: "Neutral",
        },
    ];

    return (
        <div className="flex-1 p-8 bg-[#020817] text-white min-h-screen">

            <h1 className="text-4xl font-bold mb-8">
                News Sentiment Analysis
            </h1>

            {/* Sentiment Cards */}

            <div className="grid md:grid-cols-4 gap-6 mb-8">

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Overall Sentiment</p>
                    <h2 className="text-green-500 text-3xl font-bold mt-2">
                        75%
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Positive</p>
                    <h2 className="text-green-500 text-3xl font-bold mt-2">
                        60%
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Neutral</p>
                    <h2 className="text-yellow-400 text-3xl font-bold mt-2">
                        25%
                    </h2>
                </div>

                <div className="bg-[#0e1729] p-6 rounded-2xl">
                    <p className="text-slate-400">Negative</p>
                    <h2 className="text-red-500 text-3xl font-bold mt-2">
                        15%
                    </h2>
                </div>

            </div>

            {/* Sentiment Gauge */}

            <div className="bg-[#0e1729] rounded-2xl p-8 mb-8 text-center">

                <h2 className="text-2xl font-bold mb-6">
                    Market Sentiment
                </h2>

                <div className="w-40 h-40 mx-auto rounded-full border-[12px] border-green-500 flex items-center justify-center">

                    <span className="text-4xl font-bold text-green-500">
                        75%
                    </span>

                </div>

                <p className="text-green-500 mt-4 text-xl font-semibold">
                    Bullish Market
                </p>

            </div>

            {/* News Feed */}

            <div className="bg-[#0e1729] rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Latest Financial News
                </h2>

                <div className="space-y-4">

                    {news.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#111c33] rounded-xl p-4 flex justify-between items-center"
                        >
                            <span>{item.title}</span>

                            <span
                                className={
                                    item.sentiment === "Positive"
                                        ? "text-green-500"
                                        : item.sentiment === "Negative"
                                            ? "text-red-500"
                                            : "text-yellow-400"
                                }
                            >
                                {item.sentiment}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}