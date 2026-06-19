export default function PredictionCard() {
  return (<div className="bg-[#0e1729] rounded-2xl p-5 h-[320px] border border-slate-800 hover:shadow-xl transition-all">

    <h3 className="text-white text-xl font-bold mb-6">
      AI Prediction (7 Days)
    </h3>

    <div className="flex items-center justify-center mb-6">
      <div className="bg-green-500/20 text-green-500 px-4 py-2 rounded-full font-bold">
        BUY SIGNAL
      </div>
    </div>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span className="text-slate-400">
          Current Price
        </span>

        <span className="text-white font-semibold">
          ₹3,050
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Predicted Price
        </span>

        <span className="text-green-500 font-semibold">
          ₹3,210
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Expected Growth
        </span>

        <span className="text-green-500 font-semibold">
          +5.2%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Confidence
        </span>

        <span className="text-blue-400 font-semibold">
          82%
        </span>
      </div>

      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm">
            Model Confidence
          </span>

          <span className="text-white text-sm">
            82%
          </span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: "82%" }}
          />
        </div>
      </div>

    </div>
  </div>
);
}
