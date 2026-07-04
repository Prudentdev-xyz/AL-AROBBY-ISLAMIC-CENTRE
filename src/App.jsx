import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Madrasah from "./pages/Madrasah";
import CourseDetail from "./pages/Madrasah/CourseDetail";
import Foundation from "./pages/Foundation";
import PrayerGroup from "./pages/PrayerGroup";
import Charity from "./pages/Charity";
import About from "./pages/About";
import AdminLogin from "./admin/AdminLogin";
import MadrasahApplications from "./admin/MadrasahApplications";
import PrayerGroupApplications from "./admin/PrayerGroupApplications";
import MadrasahApply from "./pages/Madrasah/Apply";
import PrayerGroupApply from "./pages/PrayerGroup/Apply";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/madrasah" element={<Madrasah />} />
          <Route path="/madrasah/courses/:slug" element={<CourseDetail />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/foundation/prayer-group" element={<PrayerGroup />} />
          <Route path="/foundation/charity" element={<Charity />} />
          <Route path="/about" element={<About />} />
          <Route path="/madrasah/apply" element={<MadrasahApply />} />
          <Route
            path="/foundation/prayer-group/apply"
            element={<PrayerGroupApply />}
          />

          {/* Hidden admin routes — not linked anywhere in Navbar/Footer */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/madrasah-applications"
            element={<MadrasahApplications />}
          />
          <Route
            path="/admin/prayer-group-applications"
            element={<PrayerGroupApplications />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
