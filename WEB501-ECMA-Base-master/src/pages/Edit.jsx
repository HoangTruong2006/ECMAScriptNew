import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.subject || !form.major)
      return setError("Vui lòng nhập đầy đủ thông tin");

    if (Number(form.age) <= 0) return setError("Tuổi phải lớn hơn 0");

    await axios.put(`http://localhost:3000/students/${id}`, form);

    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Sửa sinh viên</h2>
      {error && <p className="text-red-600">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="border w-full p-2"
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          className="border w-full p-2"
          value={form.age || ""}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          className="border w-full p-2"
          value={form.subject || ""}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <select
          className="border p-2 w-full"
          value={form.major || ""}
          onChange={(e) => setForm({ ...form, major: e.target.value })}
        >
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
