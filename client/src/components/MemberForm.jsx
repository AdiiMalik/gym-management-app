import React, { useEffect, useState } from 'react';
import { addMember, updateMember } from '../api/memberApi';
import { toast } from 'react-toastify';

const MemberForm = ({ member, onMemberAdded, clearEditingMember }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    membershipType: '',
  });

  useEffect(() => {
    if (member) {
      setForm({
        name: member.name || '',
        age: member.age || '',
        email: member.email || '',
        phone: member.phone || '',
        membershipType: member.membershipType || '',
      });
    } else {
      setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
    }
  }, [member]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (member) {
        await updateMember(member._id, form);
        toast.success('✅ Member updated successfully!');
      } else {
        await addMember(form);
        toast.success('✅ Member added successfully!');
      }
      onMemberAdded();
      setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
      clearEditingMember();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2" />
        <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" required className="border p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border p-2" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="border p-2" />
        <select name="membershipType" value={form.membershipType} onChange={handleChange} required className="border p-2 col-span-2">
          <option value="">Select Membership Type</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <button
        type="submit"
        className={`px-4 py-2 mt-4 rounded text-white ${
          !form.name ||
          !form.age ||
          !form.email ||
          !form.phone ||
          !form.membershipType
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={
          !form.name ||
          !form.age ||
          !form.email ||
          !form.phone ||
          !form.membershipType
        }
      >
        {member ? 'Update Member' : 'Add Member'}
      </button>
    </form>
  );
};

export default MemberForm;
