export default function CreateTeacherDashboard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#e5e5e5] p-8 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Create Teacher Dashboard</h1>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium">Teacher Name</label>
          <input className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">Class</label>
          <input className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">Subjects</label>
          <input className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">Experience</label>
          <input className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">Qualification</label>
          <input className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="text-sm font-medium">Profile Photo</label>
          <input type="file" className="w-full border rounded-xl px-3 py-2 mt-1" />
        </div>

        <button className="px-5 py-3 bg-[#0071e3] text-white rounded-xl">
          Save Dashboard
        </button>
      </div>
    </div>
  );
}
