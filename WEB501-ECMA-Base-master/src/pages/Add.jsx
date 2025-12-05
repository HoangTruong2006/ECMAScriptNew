import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

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
    if (Number(form.age) <= 0) return "Tuổi phải lớn hơn 0";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);
    await axios.post("http://localhost:3000/students", form);
    toast.success("Thêm sinh viên thành công!");
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Thêm sinh viên</h2>

      {error && <p className="text-red-600">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="border w-full p-2"
          placeholder="Tên"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          className="border w-full p-2"
          placeholder="Tuổi"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          className="border w-full p-2"
          placeholder="Môn học"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <select
          className="border p-2 w-full"
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
