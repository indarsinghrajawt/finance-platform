export default function PredictionCard() {
  return (
    <div className="bg-[#0e1729] rounded-xl p-5">
      <h3 className="text-white text-2xl font-bold mb-5">
        AI Prediction (7 Days)
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">Current Price</span>
          <span className="text-white font-semibold">₹3,050</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Predicted Price</span>
          <span className="text-green-500 font-semibold">₹3,210</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Expected Growth</span>
          <span className="text-green-500 font-semibold">+5.2%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Confidence</span>
          <span className="text-blue-400 font-semibold">82%</span>
        </div>
      </div>
    </div>
  );
}