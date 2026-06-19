import PortfolioPieChart from "../components/PortfolioPieChart";

export default function Portfolio() {
  const holdings = [
    {
      stock: "RELIANCE",
      qty: 25,
      buy: 2800,
      current: 2912,
      profit: "+4.0%",
    },
    {
      stock: "TCS",
      qty: 15,
      buy: 3400,
      current: 3512,
      profit: "+3.2%",
    },
    {
      stock: "HDFC",
      qty: 20,
      buy: 1600,
      current: 1678,
      profit: "+4.8%",
    },
    {
      stock: "INFY",
      qty: 10,
      buy: 1420,
      current: 1456,
      profit: "+2.5%",
    },
  ];

  return (
    <div className="flex-1 p-8 text-white bg-[#020817] min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Portfolio Management
      </h1>

      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#0e1729] p-6 rounded-2xl">
          <p className="text-slate-400">Portfolio Value</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            ₹12,45,678
          </h2>
        </div>

        <div className="bg-[#0e1729] p-6 rounded-2xl">
          <p className="text-slate-400">Today's Gain</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            +₹24,500
          </h2>
        </div>

        <div className="bg-[#0e1729] p-6 rounded-2xl">
          <p className="text-slate-400">Overall Return</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">
            +18.4%
          </h2>
        </div>

      </div>

      {/* Holdings Table */}
      <div className="bg-[#0e1729] rounded-2xl p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Holdings
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="text-left py-4">Stock</th>
                <th>Qty</th>
                <th>Buy Price</th>
                <th>Current</th>
                <th>P/L</th>
              </tr>
            </thead>

            <tbody>

              {holdings.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-800"
                >
                  <td className="py-4 font-semibold">
                    {item.stock}
                  </td>

                  <td className="text-center">
                    {item.qty}
                  </td>

                  <td className="text-center">
                    ₹{item.buy}
                  </td>

                  <td className="text-center">
                    ₹{item.current}
                  </td>

                  <td className="text-center text-green-500 font-bold">
                    {item.profit}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Portfolio Allocation Chart */}
      <PortfolioPieChart />

    </div>
  );
}