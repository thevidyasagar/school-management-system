export default function TitlePage() {
  return (
    <div className="w-full">

      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-lg mb-8">
        <h1 className="text-3xl font-semibold">School Overview</h1>
        <p className="opacity-80 mt-1">Welcome to GoUpTech School ERP</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-[#e5e7eb] hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Total Students</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">850</h2>
        </div>

        {/* 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Teaching Staff</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">52</h2>
        </div>

        {/* 3 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Total Classes</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">32</h2>
        </div>

        {/* 4 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Attendance Today</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">92%</h2>
        </div>
      </div>

      {/* Big Chart Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        <div className="bg-white rounded-3xl border p-6 shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900">Enrollment Trend</h2>
          <p className="text-sm text-gray-500 mb-4">Dummy chart area</p>

          <div className="h-56 bg-[#f3f5f7] rounded-xl border border-[#e5e7eb] flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </div>

        {/* Right Stats Box */}
        <div className="bg-white rounded-3xl border p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Class Distribution</h2>

          <div className="space-y-3">
            <div className="flex justify-between"><span>Primary School</span><span className="font-semibold text-blue-600">280</span></div>
            <div className="flex justify-between"><span>Middle School</span><span className="font-semibold text-purple-600">320</span></div>
            <div className="flex justify-between"><span>High School</span><span className="font-semibold text-green-600">250</span></div>
          </div>
        </div>

      </div>

    </div>
  );
}
