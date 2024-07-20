import { Route, Routes } from "react-router-dom";
import IntroSlider from "./pages/IntroSlider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllProperties from "./pages/AllProperties";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import Properties from "./pages/dashboard/admin/Properties";
import Residents from "./pages/dashboard/admin/Residents";
import Staff from "./pages/dashboard/admin/Staff";
import UserProfile from "./pages/UserProfile";
import Payments from "./pages/dashboard/admin/Payments";
import EntryCode from "./pages/dashboard/admin/EntryCode";
import ResidentDashboard from "./pages/dashboard/resident/ResidentDashboard";
import ResidentCode from "./pages/dashboard/resident/ResidentCode";
import ResidentPayments from "./pages/dashboard/resident/ResidentPayments";
import ResidentMaintenance from "./pages/dashboard/resident/ResidentMaintenance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroSlider />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-properties" element={<AllProperties />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard-properties" element={<Properties />} />
        <Route path="/dashboard-residents" element={<Residents />} />
        <Route path="/dashboard-staff" element={<Staff />} />
        <Route path="/dashboard-payments" element={<Payments />} />
        <Route path="/entry-code" element={<EntryCode />} />
        <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/resident-code" element={<ResidentCode />} />
        <Route path="/resident-payments" element={<ResidentPayments />} />
        <Route path="/resident-maintenance" element={<ResidentMaintenance />} />
      </Routes>
    </div>
  );
}

export default App;
