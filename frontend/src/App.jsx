import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import TitlePage from "./pages/TitlePage";   // 👈

import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Classes from "./pages/Classes";
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";
import Materials from "./pages/Materials";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="flex bg-[#f5f5f7] min-h-screen">

      {/* FIXED SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 ml-64 p-6 md:p-8">
        <Routes>

          {/*  ✅ Default = Title Page */}
          <Route path="/" element={<TitlePage />} />

          <Route path="/title" element={<TitlePage />} />

          {/* Dashboards */}
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Other pages */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
