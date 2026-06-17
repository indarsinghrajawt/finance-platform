export default function TechnicalIndicators() {
  return (
    <div className="bg-[#0e1729] rounded-xl p-5">
      <h3 className="text-white text-2xl font-bold mb-5">
        Technical Indicators
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">RSI (14)</span>
          <span className="text-yellow-400 font-semibold">
            62.4
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">MACD</span>
          <span className="text-green-500 font-semibold">
            Bullish
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">MA 50</span>
          <span className="text-green-500 font-semibold">
            Bullish
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">MA 200</span>
          <span className="text-green-500 font-semibold">
            Bullish
          </span>
        </div>
      </div>
    </div>
  );
}