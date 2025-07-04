import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMembers, deleteMember } from '../api/memberApi.js';
import MemberForm from '../components/MemberForm.jsx';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [editingMember, setEditingMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  const fetchMembers = async () => {
    try {
      const data = await getMembers();
      setMembers(data);
    } catch (error) {
      console.error("❌ Failed to fetch members:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteMember(id);
    fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Manage Members</h2>

      <MemberForm
        member={editingMember}
        onMemberAdded={fetchMembers}
        clearEditingMember={() => setEditingMember(null)}
      />

      <input
        type="text"
        placeholder="Search by name or email"
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition rounded p-3 mb-6 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Name</th>
              <th className="p-4 font-semibold text-gray-600">Email</th>
              <th className="p-4 font-semibold text-gray-600">Phone</th>
              <th className="p-4 font-semibold text-gray-600">Membership</th>
              <th className="p-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members
              .filter((m) =>
                m.name.toLowerCase().includes(search.toLowerCase()) ||
                m.email.toLowerCase().includes(search.toLowerCase())
              )
              .map((m) => (
                <tr
                  key={m._id}
                  className="hover:bg-gray-50 transition border-b last:border-b-0"
                >
                  <td className="p-4">{m.name}</td>
                  <td className="p-4">{m.email}</td>
                  <td className="p-4">{m.phone}</td>
                  <td className="p-4 capitalize">{m.membershipType}</td>
                  <td className="p-4 space-x-2">
                    <button
                      onClick={() => setEditingMember(m)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(m._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
