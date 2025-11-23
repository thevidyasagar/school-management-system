import React from "react";

const TeacherDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f2e9] px-8 py-10">


      {/* Top Bar */}
      <header className="w-full bg-white rounded-xl shadow-sm p-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Teacher Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            GoUpTech School · Academic Session 2024–25
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <p className="font-medium text-slate-900">Anjali Verma</p>
            <p className="text-xs text-slate-500">Class Teacher · VIII A</p>
          </div>

          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white font-semibold text-lg">
            A
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {[
          { title: "Total Students", value: 120, color: "text-amber-600" },
          { title: "Today’s Classes", value: 4, color: "text-blue-600" },
          { title: "Pending Assignments", value: 7, color: "text-rose-600" },
          { title: "Attendance to Verify", value: 2, color: "text-green-600" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {item.title}
            </p>
            <h2 className={`text-4xl font-bold mt-3 ${item.color}`}>
              {item.value}
            </h2>
            <p className="text-xs text-slate-500 mt-1">Updated just now</p>
          </div>
        ))}
      </section>

      {/* Main Sections */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Timetable */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Today’s Timetable
          </h3>

          <table className="w-full text-sm">
            <thead className="text-slate-600 border-b">
              <tr>
                <th className="py-3 text-left">Time</th>
                <th className="py-3 text-left">Class</th>
                <th className="py-3 text-left">Subject</th>
                <th className="py-3 text-left">Room</th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {[
                ["09:00–09:45", "VIII A", "Mathematics", "204"],
                ["10:00–10:45", "VIII B", "Mathematics", "207"],
                ["11:15–12:00", "VII A", "Science", "Lab 1"],
                ["01:00–01:45", "VIII A", "Maths (Doubt)", "204"],
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-slate-50 transition">
                  <td className="py-3">{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assigned Subjects */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Assigned Subjects
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  VIII A · Mathematics
                </p>
                <p className="text-xs text-slate-500">
                  40 students · 5 periods/week
                </p>
              </div>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                Class Teacher
              </span>
            </li>

            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  VIII B · Mathematics
                </p>
                <p className="text-xs text-slate-500">
                  38 students · 4 periods/week
                </p>
              </div>
            </li>

            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  VII A · Science
                </p>
                <p className="text-xs text-slate-500">
                  42 students · 3 periods/week
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
