import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/memberApi';
// import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data);
        setMemberCount(data.length);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      }
    };
    fetchMembers();
  }, []);

  const membershipStats = ['Gold', 'Silver', 'Premium'].map(type => ({
    type,
    count: members.filter(m => m.membershipType === type).length,
  }));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <div className="p-6 bg-gray-50 min-h-screen">
          <h2 className="text-2xl font-semibold text-gray-700">Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-lg font-medium text-gray-500">Total Members</h3>
                <p className="text-4xl font-bold text-gray-800">{memberCount}</p>
              </div>
              <span className="text-5xl text-purple-600">👥</span>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded shadow mt-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Membership Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={membershipStats}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {membershipStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
