import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    classTeacher: "",
    experience: "",
    phone: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Save to localStorage (temporary)
    localStorage.setItem("teacherData", JSON.stringify(form));

    navigate("/teacher-dashboard");
  }

  return (
    <div className="w-full">

      <h1 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
        Create Teacher Dashboard
      </h1>

      <div className="bg-white rounded-3xl border border-[#e5e5e5] p-8 shadow-sm max-w-2xl">

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" value={form.email} onChange={handleChange} />
          <Input label="Subject" name="subject" value={form.subject} onChange={handleChange} />
          <Input label="Class Teacher Of" name="classTeacher" value={form.classTeacher} onChange={handleChange} />
          <Input label="Experience (Years)" name="experience" value={form.experience} onChange={handleChange} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />

          <button
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            type="submit"
          >
            Save & Continue
          </button>

        </form>

      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-[#1d1d1f]">{label}</label>
      <input
        className="w-full mt-1 px-4 py-3 rounded-xl border border-[#dcdcdc] bg-[#fafafa] focus:outline-none"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
