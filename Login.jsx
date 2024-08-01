import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleMail = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setLoginPass(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;
    let validation = {};

    if (!loginEmail) {
      isValid = false;
      validation.loginEmail = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      isValid = false;
      validation.loginEmail = "Email is not valid";
    }

    if (!loginPass) {
      isValid = false;
      validation.loginPass = "Password Required";
    }

    if (!isValid) {
      setErrors(validation);
      return;
    }

    fetch(`http://localhost:3006/users?email=${loginEmail}&password=${loginPass}`)
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(
          (user) => user.email === loginEmail && user.password === loginPass
        );
        if (user) {
          toast.success("LoggedIn Successfully!");
          localStorage.setItem("Users", JSON.stringify(user));
          if (user.userType === "Admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch((err) => {
        toast.error("Login failed: " + err.message);
      });
  };

  return (
    <div className="bg-[url('/public/Auth_Banner.jpg')] bg-cover bg-center flex h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 bg-black/90 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          <div>
            <label className="block mb-2 text-gray-200 font-semibold">
              Email ID
            </label>
            <input
              type="email"
              value={loginEmail}
              onChange={handleMail}
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            {errors.loginEmail && (
              <p className="text-red-500 text-sm">{errors.loginEmail}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-200 font-semibold">
              Password
            </label>
            <input
              type="password"
              value={loginPass}
              onChange={handlePassword}
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            {errors.loginPass && (
              <p className="text-red-500 text-sm">{errors.loginPass}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-full px-6 py-3 hover:bg-pink-600 hover:shadow-lg transition duration-300 w-full"
          ><a href="/">
            Login</a>
          </button>
          <p className="text-center text-gray-300 mt-4">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="underline text-blue-400 hover:text-blue-600 transition duration-200 cursor-pointer"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
