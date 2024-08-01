import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("User");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    const regObj = {
      id: Date.now(), // Use Date.now() to generate a unique ID for each user
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      userType: data.userType,
    };

    try {
      const response = await fetch("http://localhost:3006/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      });

      if (response.ok) {
        toast.success("Registered successfully.", { position: "top-right" });
        localStorage.setItem("Users", JSON.stringify(regObj));
        // Navigate based on user type
        if (regObj.userType === "Admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        const errorData = await response.json();
        toast.error("Failed: " + errorData.message, { position: "top-right" });
      }
    } catch (err) {
      toast.error("Failed: " + err.message, { position: "top-right" });
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
            SIGNUP
          </h3>

          {/* Fullname */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              {...register("fullname", { required: "Fullname is required" })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500 block text-center mt-1">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">
              Email
            </label>
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
            <label className="block mb-2 text-gray-200 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 block text-center mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500 block text-center mt-1">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* User Type */}
          <div className="mb-4 w-full">
            <label className="block mb-2 text-gray-200 font-semibold">
              User Type
            </label>
            <select
              {...register("userType")}
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-transparent text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center mt-6 w-full">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-full px-6 py-3 hover:bg-pink-600 hover:shadow-lg transition duration-300 w-full"
            >
              Signup
            </button>
            <p className="text-center mt-4 text-white">
              Already have an account?{" "}
              <a
                href="/login"
                className="underline text-blue-400 hover:text-blue-600 transition duration-200"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
