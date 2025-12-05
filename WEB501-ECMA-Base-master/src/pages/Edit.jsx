import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    subject: "",
    major: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("students") || "[]");
    const found = list.find((s) => s.id == id);
    if (found) setForm(found);
  }, [id]);

  const validate = () => {
    if (!form.name || !form.age || !form.subject || !form.major) {
      return "Vui lòng nhập đầy đủ thông tin";
    }
    if (isNaN(form.age) || Number(form.age) <= 0) {
      return "Tuổi phải lớn hơn 0";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);

    const list = JSON.parse(localStorage.getItem("students") || "[]");
    const idx = list.findIndex((s) => s.id == id);

    list[idx] = form;

    localStorage.setItem("students", JSON.stringify(list));
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sửa sinh viên</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          value={form.age}
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          type="text"
          value={form.subject}
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <select
          value={form.major}
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, major: e.target.value })}
        >
          <option value="">-- Chọn ngành --</option>
          <option value="FE">FE</option>
          <option value="BE">BE</option>
          <option value="MOBILE">Mobile</option>
        </select>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default Edit;
