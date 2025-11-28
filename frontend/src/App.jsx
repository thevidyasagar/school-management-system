import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

// Default Home Page
import TitlePage from "./pages/TitlePage";

// Dashboards
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Teacher Create Page
import TeacherCreate from "./pages/TeacherCreate";

// Other Pages
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

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 ml-64 p-6 md:p-8">
        <Routes>

          {/* DEFAULT LANDING PAGE */}
          <Route path="/" element={<TitlePage />} />
          <Route path="/title" element={<TitlePage />} />

          {/* TEACHER FLOW */}
          <Route path="/teacher/create" element={<TeacherCreate />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

          {/* OTHER DASHBOARDS */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* STANDARD PAGES */}
          <Route path="/timetable" element={<div>Timetable Coming Soon</div>} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/exams" element={<div>Exams Page Coming Soon</div>} />
          <Route path="/notifications" element={<div>Notifications Coming Soon</div>} />
          <Route path="/messages" element={<div>Messages Coming Soon</div>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<div>Logout</div>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
