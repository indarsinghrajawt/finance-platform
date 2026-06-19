export default function TechnicalIndicators() {
  return (<div className="bg-[#0e1729] rounded-2xl p-5 h-[320px] border border-slate-800 hover:shadow-xl transition-all">

    <h3 className="text-white text-xl font-bold mb-6">
      Technical Indicators
    </h3>

    <div className="space-y-5">

      <div className="flex justify-between items-center">
        <span className="text-slate-400">
          RSI (14)
        </span>

        <div className="flex items-center gap-2">
          <div className="w-16 bg-slate-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: "62%" }}
            />
          </div>

          <span className="text-yellow-400 font-semibold">
            62.4
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          MACD
        </span>

        <span className="text-green-500 font-semibold">
          Bullish
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          MA 50
        </span>

        <span className="text-green-500 font-semibold">
          Bullish
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          MA 200
        </span>

        <span className="text-green-500 font-semibold">
          Bullish
        </span>
      </div>

      <div className="border-t border-slate-700 pt-4 mt-4">
        <p className="text-slate-400 text-sm">
          Overall Signal
        </p>

        <p className="text-green-500 text-2xl font-bold mt-2">
          STRONG BUY
        </p>
      </div>

    </div>
  </div>

);
}
