import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for tables or stats
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'User' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Admin' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
];

function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="block py-2.5 px-4 text-gray-700 hover:bg-gray-200 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block py-2.5 px-4 text-gray-700 hover:bg-gray-200 rounded"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block py-2.5 px-4 text-gray-700 hover:bg-gray-200 rounded"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between bg-white shadow-md p-4 rounded">
          <div className="text-xl font-semibold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Logout
            </button>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-3xl mt-2">150</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
            <p className="text-3xl mt-2">120</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Admins</h3>
            <p className="text-3xl mt-2">5</p>
          </div>
        </div>

        {/* User Table */}
        <div className="mt-8 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Users</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border-b">{user.id}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
