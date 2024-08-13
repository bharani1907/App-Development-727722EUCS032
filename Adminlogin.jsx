import React, { useState } from 'react';
import { FaTachometerAlt, FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';
import Navbar from './Navbar';

// Sample data
const initialEvents = [
  { id: 1, title: 'Birthday Party', venue: 'Central Park', date: '2024-08-15' },
  { id: 2, title: 'Wedding Reception', venue: 'Grand Ballroom', date: '2024-09-12' },
  { id: 3, title: 'Corporate Meeting', venue: 'Downtown Conference Center', date: '2024-10-22' },
];

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', contact: '555-1234' },
  { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', contact: '555-5678' },
  { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', contact: '555-8765' },
];

const Adminlogin = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Manage active tab
  const [events, setEvents] = useState(initialEvents);
  const [users] = useState(initialUsers);

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-extrabold">Admin Dashboard</h1>
        </div>
        <ul className="mt-6">
          <li
            className={`hover:bg-gray-700 ${activeTab === 'overview' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <a href="#" className="flex items-center p-4 text-gray-300 hover:text-white">
              <FaTachometerAlt className="mr-3 text-xl" />
              <span className="text-lg font-semibold">Dashboard</span>
            </a>
          </li>
          <li
            className={`hover:bg-gray-700 ${activeTab === 'users' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <a href="#" className="flex items-center p-4 text-gray-300 hover:text-white">
              <FaUsers className="mr-3 text-xl" />
              <span className="text-lg font-semibold">Users</span>
            </a>
          </li>
          <li
            className={`hover:bg-gray-700 ${activeTab === 'events' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <a href="#" className="flex items-center p-4 text-gray-300 hover:text-white">
              <FaCalendarAlt className="mr-3 text-xl" />
              <span className="text-lg font-semibold">Events</span>
            </a>
          </li>
          <li
            className={`hover:bg-gray-700 ${activeTab === 'settings' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <a href="#" className="flex items-center p-4 text-gray-300 hover:text-white">
              <FaCog className="mr-3 text-xl" />
              <span className="text-lg font-semibold">Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 " >
        {activeTab === 'overview' && (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Overview</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Users</h3>
                <p className="text-4xl font-bold text-blue-600">{users.length}</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Events</h3>
                <p className="text-4xl font-bold text-green-600">{events.length}</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Pending Requests</h3>
                <p className="text-4xl font-bold text-yellow-600">8</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Venues Booked</h3>
                <p className="text-4xl font-bold text-red-600">4</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'events' && (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Events</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Events: {events.length}</h3>
              </div>
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map(event => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.venue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Users</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'Settings' && (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Settings</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-gray-700">Settings content will go here.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Adminlogin;
