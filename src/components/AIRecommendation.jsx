export default function Recommendation({
  action = "BUY",
  confidence = 85,
  color = "green",
}) {
  const textColor =
    color === "green"
      ? "text-green-500"
      : color === "red"
        ? "text-red-500"
        : "text-yellow-500";

  const bgColor =
    color === "green"
      ? "bg-green-500/20"
      : color === "red"
        ? "bg-red-500/20"
        : "bg-yellow-500/20";

  return (<div className="bg-[#0e1729] rounded-2xl p-5 h-[320px] border border-slate-800 hover:shadow-xl transition-all">

    <h3 className="text-white text-xl font-bold mb-6">
      AI Recommendation
    </h3>

    <div className="flex justify-center mb-6">
      <div
        className={`${bgColor} px-6 py-3 rounded-full`}
      >
        <span className={`text-2xl font-bold ${textColor}`}>
          {action}
        </span>
      </div>
    </div>

    <div className="text-center">
      <p className="text-slate-400">
        Confidence Score
      </p>

      <p className={`text-4xl font-bold mt-2 ${textColor}`}>
        {confidence}%
      </p>
    </div>

    <div className="mt-6">
      <div className="w-full bg-slate-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color === "green"
              ? "bg-green-500"
              : color === "red"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>

    <p className="text-slate-400 text-center mt-6">
      Recommendation generated using AI trend analysis,
      momentum indicators and sentiment scoring.
    </p>

  </div>

);
}
