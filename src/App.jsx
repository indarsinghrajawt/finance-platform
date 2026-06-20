import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import MarketOverview from "./pages/MarketOverview";
import StockAnalysis from "./pages/StockAnalysis";
import Predictions from "./pages/Predictions";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import NewsSentiment from "./pages/NewsSentiment";
import Watchlist from "./pages/Watchlist";
import Alerts from "./pages/Alerts";

function AppContent() {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <div className="flex min-h-screen bg-[#020817] overflow-x-hidden">

      {!hideSidebar && <Sidebar />}

      <Routes>

        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ TEMP: ProtectedRoute removed for testing */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<MarketOverview />} />
        <Route path="/analysis" element={<StockAnalysis />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<NewsSentiment />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}