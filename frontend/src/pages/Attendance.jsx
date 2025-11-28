export default function Attendance() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Attendance</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="date"
          className="border rounded-lg px-3 py-2"
        />

        <select className="border rounded-lg px-3 py-2">
          <option>VIII A</option>
          <option>VIII B</option>
          <option>VII A</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="text-slate-600 border-b">
          <tr>
            <th className="py-2 text-left">Student</th>
            <th className="py-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {["Aditya Sharma", "Priya Singh", "Rahul Verma"].map((name) => (
            <tr key={name} className="border-b">
              <td className="py-2">{name}</td>
              <td>
                <select className="border rounded px-2 py-1">
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-5 px-4 py-2 bg-emerald-600 text-white rounded-lg">
        Submit Attendance
      </button>
    </div>
  );
}
