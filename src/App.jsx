import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex min-h-screen overflow-x-hidden bg-[#020817]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}