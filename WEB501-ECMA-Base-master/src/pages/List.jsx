import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:3000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Xóa sinh viên này?")) {
      await axios.delete(`http://localhost:3000/students/${id}`);
      loadData();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Danh sách sinh viên</h2>

      <Link
        to="/add"
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-4"
      >
        + Thêm mới
      </Link>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Tên</th>
            <th className="border p-2">Tuổi</th>
            <th className="border p-2">Môn</th>
            <th className="border p-2">Ngành</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.age}</td>
              <td className="border p-2">{s.subject}</td>
              <td className="border p-2">{s.major}</td>
              <td className="border p-2">
                <Link
                  to={`/edit/${s.id}`}
                  className="px-3 py-1 bg-yellow-400 mr-2 rounded"
                >
                  Sửa
                </Link>

                <button
                  onClick={() => handleDelete(s.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
