export default function Materials() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Study Materials</h1>

      <div className="mb-5">
        <input type="file" className="border p-2 rounded-lg bg-white" />
        <button className="ml-3 px-4 py-2 bg-slate-800 text-white rounded-lg">
          Upload
        </button>
      </div>

      <ul className="space-y-4">
        <li className="p-4 bg-[#f8f2e9] rounded-lg border">
          Maths Chapter 3 Notes.pdf
        </li>

        <li className="p-4 bg-[#f8f2e9] rounded-lg border">
          Science Practical Manual.docx
        </li>
      </ul>
    </div>
  );
}
