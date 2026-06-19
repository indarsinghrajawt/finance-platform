export default function MarketOverview() {
  const gainers = [
    { stock: "RELIANCE", change: "+4.35%" },
    { stock: "TCS", change: "+3.12%" },
    { stock: "INFY", change: "+2.85%" },
    { stock: "HDFC", change: "+2.15%" },
  ];

  const losers = [
    { stock: "TSLA", change: "-2.14%" },
    { stock: "META", change: "-1.32%" },
    { stock: "NFLX", change: "-1.05%" },
    { stock: "UBER", change: "-0.88%" },
  ];

  return (
    <div className="flex-1 p-8 text-white bg-[#020817] min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Market Overview
      </h1>

      {/* Market Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">
          <p className="text-slate-400">NIFTY 50</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            22,530
          </h2>
          <p className="text-green-400 mt-2">
            +1.25%
          </p>
        </div>

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">
          <p className="text-slate-400">SENSEX</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            74,108
          </h2>
          <p className="text-green-400 mt-2">
            +1.18%
          </p>
        </div>

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">
          <p className="text-slate-400">BANK NIFTY</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            49,820
          </h2>
          <p className="text-green-400 mt-2">
            +0.92%
          </p>
        </div>

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">
          <p className="text-slate-400">Market Mood</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            Bullish
          </h2>
          <p className="text-green-400 mt-2">
            Strong Momentum
          </p>
        </div>

      </div>

      {/* Gainers & Losers */}

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">

          <h2 className="text-2xl font-bold mb-5 text-green-500">
            🚀 Top Gainers
          </h2>

          {gainers.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-slate-700"
            >
              <span className="font-medium">
                {item.stock}
              </span>

              <span className="text-green-500 font-bold">
                {item.change}
              </span>
            </div>
          ))}

        </div>

        <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">

          <h2 className="text-2xl font-bold mb-5 text-red-500">
            📉 Top Losers
          </h2>

          {losers.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-slate-700"
            >
              <span className="font-medium">
                {item.stock}
              </span>

              <span className="text-red-500 font-bold">
                {item.change}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Sector Performance */}

      <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Sector Performance
        </h2>

        <div className="space-y-6">

          <div>
            <div className="flex justify-between mb-2">
              <span>IT Sector</span>
              <span className="text-green-500">
                +3.2%
              </span>
            </div>

            <div className="bg-slate-700 h-3 rounded-full">
              <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Banking</span>
              <span className="text-blue-400">
                +2.1%
              </span>
            </div>

            <div className="bg-slate-700 h-3 rounded-full">
              <div className="bg-blue-500 h-3 rounded-full w-[70%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Pharma</span>
              <span className="text-yellow-400">
                +1.5%
              </span>
            </div>

            <div className="bg-slate-700 h-3 rounded-full">
              <div className="bg-yellow-500 h-3 rounded-full w-[55%]"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Market Heatmap */}

      <div className="bg-[#0e1729] rounded-2xl p-6 border border-slate-800">

        <h2 className="text-2xl font-bold mb-6">
          Market Heatmap
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-green-600 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">RELIANCE</h3>
            <p>+4.35%</p>
          </div>

          <div className="bg-green-500 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">TCS</h3>
            <p>+3.12%</p>
          </div>

          <div className="bg-green-700 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">INFY</h3>
            <p>+2.85%</p>
          </div>

          <div className="bg-red-500 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">TSLA</h3>
            <p>-2.14%</p>
          </div>

          <div className="bg-green-500 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">HDFC</h3>
            <p>+2.15%</p>
          </div>

          <div className="bg-red-600 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">META</h3>
            <p>-1.32%</p>
          </div>

          <div className="bg-green-600 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">ICICI</h3>
            <p>+1.75%</p>
          </div>

          <div className="bg-green-700 hover:scale-105 transition-all p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl">SBI</h3>
            <p>+2.42%</p>
          </div>

        </div>

      </div>

    </div>
  );
}