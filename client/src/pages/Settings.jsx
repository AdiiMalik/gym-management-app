import React, { useState } from 'react';
import { updateAccount } from '../api/authApi';
import { toast } from 'react-toastify';

const Settings = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newEmail: '',
    newPassword: '',
  });
  const [loading, setLoading] = useState(false); // ✅ Loading state for button feedback

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading before API call
    try {
      await updateAccount(formData);
      toast.success('Account updated successfully!');

      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login after update

      setFormData({ currentPassword: '', newEmail: '', newPassword: '' });
    } catch (err) {
      console.error('❌ Update error:', err);
      toast.error(err.response?.data?.message || 'Failed to update account.');
    } finally {
      setLoading(false); // ✅ Always stop loading after request
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Update Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Enter current password"
            required
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">New Email</label>
          <input
            type="email"
            name="newEmail"
            placeholder="Enter new email"
            value={formData.newEmail}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded transition"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 font-medium mb-2">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded transition"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full flex justify-center items-center"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Account'}
        </button>
      </form>
    </div>
  );
};

export default Settings;
