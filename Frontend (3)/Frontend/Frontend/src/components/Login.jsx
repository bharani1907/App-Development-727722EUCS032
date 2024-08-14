// src/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:9000/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const responseData = await response.json();
      login(responseData); // Set user data in context
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error("Login Failed: " + error.message);
    }
  };

  return (
    <div className="bg-[url('/public/Auth_Banner.jpg')] bg-cover bg-center flex h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 bg-black/90 rounded-xl shadow-lg relative">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <button
            onClick={() => navigate("/")}
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-white"
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-8 text-center text-white tracking-wide">
            LOGIN
          </h3>

          {/* Email */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 block text-center mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 block text-center mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Button */}
          <div className="flex flex-col items-center mt-6 w-full">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-full px-6 py-3 hover:bg-pink-600 hover:shadow-lg transition duration-300 w-full"
            >
              Login
            </button>
            <p className="text-center mt-4 text-white">
              Don't have an account?{" "}
              <a href="/signup" className="underline text-blue-400 hover:text-blue-600 transition duration-200">
                Signup
              </a>
            </p>
            <p className="text-center mt-4 text-white">
              <a href="/adminauth" className="underline text-blue-400 hover:text-blue-600 transition duration-200">
                Login as ADMIN
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
