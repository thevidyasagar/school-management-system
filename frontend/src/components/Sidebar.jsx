import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Premium Icons (you can change later too)
import {
  LayoutDashboard,
  Home,
  User,
  GraduationCap,
  Users,
  Calendar,
  ClipboardList,
  FileBarChart,
  BookOpen,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [openDashboard, setOpenDashboard] = useState(false);

  return (
    <aside className="w-64 min-h-screen bg-[#f8fafc] border-r border-[#e5e7eb] p-5 fixed left-0 top-0 shadow-sm">

      {/* TOP LOGO SECTION */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-bold text-[#1e293b] tracking-tight">
          GoUpTech
        </h1>

        {/* Logo Box */}
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 
                        text-white flex items-center justify-center font-semibold shadow-md">
          G
        </div>
      </div>

      {/* MENU */}
      <nav className="space-y-1">

        {/* DASHBOARD DROPDOWN */}
        <button
          onClick={() => setOpenDashboard(!openDashboard)}
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
            ${pathname.includes("dashboard")
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
              : "text-[#475569] hover:bg-white hover:shadow-sm"
            }
          `}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        {/* Dashboard Submenu */}
        {openDashboard && (
          <div className="ml-4 mt-2 space-y-1">

            <SubLink title="Teacher Dashboard" path="/teacher-dashboard" pathname={pathname} icon={User} />
            <SubLink title="Student Dashboard" path="/student-dashboard" pathname={pathname} icon={GraduationCap} />
            <SubLink title="Admin Dashboard" path="/admin-dashboard" pathname={pathname} icon={Users} />

            <SubLink title="Create Dashboard" path="/teacher-dashboard/create" pathname={pathname} icon={FileBarChart} />
            <SubLink title="View Dashboard" path="/teacher-dashboard" pathname={pathname} icon={Home} />

          </div>
        )}

        {/* STATIC MENU ITEMS */}
        <LinkItem title="My Timetable" path="/timetable" pathname={pathname} icon={Calendar} />
        <LinkItem title="My Classes" path="/classes" pathname={pathname} icon={Users} />
        <LinkItem title="Attendance" path="/attendance" pathname={pathname} icon={ClipboardList} />
        <LinkItem title="Assignments" path="/assignments" pathname={pathname} icon={ClipboardList} />
        <LinkItem title="Exams & Marks" path="/exams" pathname={pathname} icon={FileBarChart} />
        <LinkItem title="Study Material" path="/materials" pathname={pathname} icon={BookOpen} />
        <LinkItem title="Notifications" path="/notifications" pathname={pathname} icon={Bell} />
        <LinkItem title="Messages" path="/messages" pathname={pathname} icon={MessageSquare} />
        <LinkItem title="Settings" path="/settings" pathname={pathname} icon={Settings} />
        <LinkItem title="Logout" path="/logout" pathname={pathname} icon={LogOut} />

      </nav>
    </aside>
  );
}

/* ------------- COMPONENTS ------------- */

function LinkItem({ title, path, pathname, icon: Icon }) {
  const active = pathname === path;

  return (
    <Link
      to={path}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
        ${active
          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md scale-[1.02]"
          : "text-[#475569] hover:bg-white hover:shadow-sm"
        }
      `}
    >
      <Icon size={20} className={`${active ? "text-white" : "text-gray-500"}`} />
      {title}
    </Link>
  );
}

function SubLink({ title, path, pathname, icon: Icon }) {
  const active = pathname === path;

  return (
    <Link
      to={path}
      className={`
        flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all
        ${active
          ? "bg-white text-black shadow-sm"
          : "text-[#475569] hover:bg-white"
        }
      `}
    >
      <Icon size={16} />
      {title}
    </Link>
  );
}
