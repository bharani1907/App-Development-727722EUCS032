import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Navbar() {
  const { authUser, logout } = useAuth();
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Logout Successful");
    navigate("/login");
  };

  // Function to handle booking navigation
  const handleBookingClick = () => {
    if (authUser) {
      navigate("/venues");
    } else {
      toast.error("Please log in to access the Booking page.");
      navigate("/login");
    }
  };

  return (
    <div
      className={`bg-black text-white max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-md" : ""
      }`}
    >
      <div className="navbar flex items-center justify-between h-20">
        <div className="navbar-start flex items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            <img src="/public/FUNLOGO2.png" height="30" width="200" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="/"
                className="flex items-center justify-center px-3 py-2 rounded-full hover:bg-gray-700"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios/24/home-page.png"
                  alt="Home"
                  className="filter invert"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="px-3 py-2 rounded-full text-white hover:bg-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 rounded-full text-white hover:bg-gray-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-full text-white hover:bg-gray-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleBookingClick}
                className="px-3 py-2 rounded-full text-white hover:bg-gray-700"
              >
                Booking
              </button>
            </li>
            {authUser ? (
              <li>
                <button
                  className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-700"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;