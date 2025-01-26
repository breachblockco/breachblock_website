import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result=dispatch(loginUser({ email, password }));
    console.log(result)
    setEmail("");
    setPassword("");
    navigate("/dashboard/home")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#273142]">
      <div className="w-full max-w-md p-8 bg-[#323d4e] rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-lg text-gray-800 bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-lg text-gray-800 bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
