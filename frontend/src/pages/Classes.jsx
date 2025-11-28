export default function Classes() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Classes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {["VIII A", "VIII B", "VII A", "VII B", "VI A"].map((cls) => (
          <div
            key={cls}
            className="p-5 bg-[#f8f2e9] border border-[#e6dccb] rounded-xl hover:shadow transition"
          >
            <h2 className="text-lg font-semibold">{cls}</h2>
            <p className="text-sm text-slate-600 mt-1">40 Students</p>

            <button className="mt-3 px-3 py-1.5 bg-slate-800 text-white rounded-lg text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
