import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teacherData"));
    setTeacher(data);
  }, []);

  if (!teacher) {
    return (
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-[#1d1d1f]">No Dashboard Found</h1>
        <p className="text-[#6e6e73] mt-2">Please create a teacher dashboard first.</p>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* ======================= HEADER ======================= */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-[#1d1d1f]">Teacher Dashboard</h1>
          <p className="text-[#6e6e73]">GoUpTech School • Academic Session 2024–25</p>
        </div>

        {/* PROFILE BOX */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-[#e5e5e5] hover:shadow-md transition"
          >
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-[#1d1d1f]">{teacher.name}</span>
              <span className="text-xs text-[#6e6e73]">{teacher.classTeacher}</span>
            </div>

            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 text-white flex items-center justify-center font-semibold">
              {teacher.name.charAt(0)}
            </div>

            <ChevronDown size={18} />
          </button>

          {/* Profile Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl border border-[#e5e5e5] py-2">
              <DropdownItem label="View Profile" />
              <DropdownItem label="Edit Profile" />
              <DropdownItem label="Logout" />
            </div>
          )}
        </div>
      </div>

      {/* ======================= STATS CARDS ======================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <Card label="Total Students" value="120" />
        <Card label="Today’s Classes" value="4" />
        <Card label="Pending Assignments" value="7" />
        <Card label="Attendance to Verify" value="2" />
      </div>

      {/* ======================= QUICK ACTIONS ======================= */}
      <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">

        <QuickBtn label="My Classes" />
        <QuickBtn label="Attendance" />
        <QuickBtn label="Assignments" />
        <QuickBtn label="Exams / Marks Entry" />
        <QuickBtn label="Study Material" />
        <QuickBtn label="Schedule Test" />

      </div>

      {/* ======================= TIMETABLE + SUBJECTS ======================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">

        {/* TIMETABLE */}
        <div className="bg-white rounded-3xl border border-[#e5e5e5] shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Today's Timetable</h3>

          <table className="w-full">
            <thead className="text-left text-[#6e6e73] text-sm border-b">
              <tr>
                <th className="py-2">Time</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody className="text-[#1d1d1f]">
              <Row time="09:00–09:45" classs="VIII A" subject="Mathematics" room="204" />
              <Row time="10:00–10:45" classs="VIII B" subject="Mathematics" room="207" />
              <Row time="11:15–12:00" classs="VII A" subject="Science" room="Lab 1" />
              <Row time="01:00–01:45" classs="VIII A" subject="Maths (Doubt)" room="204" />
            </tbody>
          </table>
        </div>

        {/* ASSIGNED SUBJECTS */}
        <div className="bg-white rounded-3xl border border-[#e5e5e5] shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Assigned Subjects</h3>

          <Subject title="VIII A · Mathematics" students="40" periods="5" tag />
          <Subject title="VIII B · Mathematics" students="38" periods="4" />
          <Subject title="VII A · Science" students="42" periods="3" />
        </div>
      </div>

    </div>
  );
}

/* ======================= COMPONENTS ======================= */

function Card({ label, value }) {
  return (
    <div className="bg-white rounded-3xl border border-[#e5e5e5] p-6 shadow-sm">
      <p className="text-[#6e6e73] text-sm">{label}</p>
      <h2 className="text-3xl font-semibold text-[#1d1d1f] mt-1">{value}</h2>
    </div>
  );
}

function Row({ time, classs, subject, room }) {
  return (
    <tr className="border-b">
      <td className="py-3">{time}</td>
      <td>{classs}</td>
      <td>{subject}</td>
      <td>{room}</td>
    </tr>
  );
}

function Subject({ title, students, periods, tag }) {
  return (
    <div className="mb-4">
      <p className="font-medium text-[#1d1d1f]">{title}</p>
      <p className="text-[#6e6e73] text-sm">{students} students · {periods} periods/week</p>
      {tag && (
        <span className="inline-block mt-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
          Class Teacher
        </span>
      )}
    </div>
  );
}

function QuickBtn({ label }) {
  return (
    <button className="bg-white border border-[#e5e5e5] shadow-sm rounded-2xl py-3 text-sm font-medium text-[#1d1d1f] hover:shadow-md transition">
      {label}
    </button>
  );
}

function DropdownItem({ label }) {
  return (
    <button className="w-full text-left px-4 py-2 text-sm text-[#1d1d1f] hover:bg-[#f5f5f5]">
      {label}
    </button>
  );
}
