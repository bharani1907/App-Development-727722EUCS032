import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTachometerAlt, FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';
import Navbar from './Navbar';
import 'animate.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/bookings');
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching bookings');
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchBookings();
    fetchUsers();
  }, []);

  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      setError('Error deleting booking');
    }
  };

  if (loading)
    return (
      <p className="text-center text-xl font-semibold text-gray-600">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center text-xl font-semibold text-red-600">{error}</p>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate__animated animate__fadeIn">
      <Navbar />
      <div className="flex flex-1 mt-16"> {/* Adjusted margin-top for alignment */}
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white shadow-2xl">
          <div className="p-6">
            <h1 className="text-3xl font-extrabold font-mono tracking-wide">Admin Dashboard</h1>
          </div>
          <ul className="mt-8 space-y-2">
            <li
              className={`hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-110 ${activeTab === 'overview' ? 'bg-purple-600' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <a href="#" className="flex items-center p-4 text-white">
                <FaTachometerAlt className="mr-3 text-2xl" />
                <span className="text-lg font-bold">Dashboard</span>
              </a>
            </li>
            <li
              className={`hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-110 ${activeTab === 'users' ? 'bg-purple-600' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <a href="#" className="flex items-center p-4 text-white">
                <FaUsers className="mr-3 text-2xl" />
                <span className="text-lg font-bold">Users</span>
              </a>
            </li>
            <li
              className={`hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-110 ${activeTab === 'events' ? 'bg-purple-600' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <a href="#" className="flex items-center p-4 text-white">
                <FaCalendarAlt className="mr-3 text-2xl" />
                <span className="text-lg font-bold">Events</span>
              </a>
            </li>
            <li
              className={`hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-110 ${activeTab === 'settings' ? 'bg-purple-600' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <a href="/" className="flex items-center p-4 text-white">
                <FaCog className="mr-3 text-2xl" />
                <span className="text-lg font-bold">Logout</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 text-gray-900">
          {activeTab === 'overview' && (
            <>
              <h2 className="text-5xl font-bold mb-8 animate__animated animate__fadeInDown text-white">Overview</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 animate__animated animate__zoomIn">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-lg shadow-2xl border border-purple-300 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Users</h3>
                  <p className="text-4xl font-bold text-blue-600">{users.length}</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-lg shadow-2xl border border-green-300 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Events</h3>
                  <p className="text-4xl font-bold text-green-600">{bookings.length}</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-lg shadow-2xl border border-yellow-300 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Revenue</h3>
                  <p className="text-4xl font-bold text-yellow-600">Rs 800000</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-8 rounded-lg shadow-2xl border border-red-300 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Venues Booked</h3>
                  <p className="text-4xl font-bold text-green-600">{bookings.length}</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'events' && (
            <>
              <h2 className="text-5xl font-bold mb-8 animate__animated animate__fadeInDown text-white">Events</h2>
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200 animate__animated animate__zoomIn">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Events: {bookings.length}</h3>
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                  <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Venue</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.venue}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.message}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
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
              <h2 className="text-5xl font-bold mb-8 animate__animated animate__fadeInDown text-white">Users</h2>
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200 animate__animated animate__zoomIn">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Total Users: {users.length}</h3>
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                  <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Username</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
