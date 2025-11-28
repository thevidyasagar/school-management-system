export default function Settings() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            className="w-full border rounded-lg px-3 py-2 mt-1"
            defaultValue="Anjali Verma"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full border rounded-lg px-3 py-2 mt-1"
            defaultValue="anjali@gouptech.com"
          />
        </div>

        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
          Save Settings
        </button>
      </div>
    </div>
  );
}
