export default function Assignments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Assignments</h1>

      <button className="mb-4 px-4 py-2 bg-slate-800 text-white rounded-lg">
        + Add New Assignment
      </button>

      <ul className="space-y-4">
        <li className="p-4 bg-[#f8f2e9] rounded-lg border">
          <h3 className="font-semibold">Algebra Worksheet #3</h3>
          <p className="text-sm text-slate-600">VIII A • Due: 10 March</p>
        </li>

        <li className="p-4 bg-[#f8f2e9] rounded-lg border">
          <h3 className="font-semibold">Science Lab Report</h3>
          <p className="text-sm text-slate-600">VII A • Due: 13 March</p>
        </li>
      </ul>
    </div>
  );
}
