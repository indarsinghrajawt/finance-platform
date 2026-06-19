import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import MarketOverview from "./pages/MarketOverview";
import StockAnalysis from "./pages/StockAnalysis";
import Predictions from "./pages/Predictions";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import NewsSentiment from "./pages/NewsSentiment";
import Watchlist from "./pages/Watchlist";
import Alerts from "./pages/Alerts";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#020817] overflow-x-hidden">

        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/market"
            element={<MarketOverview />}
          />

          <Route
            path="/analysis"
            element={<StockAnalysis />}
          />

          <Route
            path="/predictions"
            element={<Predictions />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/news"
            element={<NewsSentiment />}
          />

          <Route
            path="/watchlist"
            element={<Watchlist />}
          />

          <Route
            path="/alerts"
            element={<Alerts />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}