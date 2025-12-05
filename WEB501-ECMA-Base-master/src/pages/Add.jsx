import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    subject: "",
    major: "",
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name || !form.age || !form.subject || !form.major) {
      return "Vui lòng nhập đầy đủ thông tin";
    }
    if (isNaN(form.age) || Number(form.age) <= 0) {
      return "Tuổi phải lớn hơn 0";
    }
    if (!["FE", "BE", "MOBILE"].includes(form.major)) {
      return "Ngành học không hợp lệ";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);

    const list = JSON.parse(localStorage.getItem("students") || "[]");

    list.push({
      id: Date.now(),
      ...form,
    });

    localStorage.setItem("students", JSON.stringify(list));
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Thêm sinh viên</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sinh viên"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Tuổi"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          type="text"
          placeholder="Môn học"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <select
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, major: e.target.value })}
        >
          <option value="">-- Chọn ngành --</option>
          <option value="FE">FE</option>
          <option value="BE">BE</option>
          <option value="MOBILE">Mobile</option>
        </select>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Thêm
        </button>
      </form>
    </div>
  );
}

export default Add;
