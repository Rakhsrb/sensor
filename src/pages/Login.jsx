import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // If successful, you can redirect or perform further actions
      console.log(userData);
    } catch (error) {
      setError("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-sky-900">
          Login
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sky-900 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={userData.email}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label="email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sky-900 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={userData.password}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-label="password"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label
              htmlFor="showPassword"
              className="text-sky-900 font-semibold"
            >
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className={`w-full bg-sky-900 text-white py-3 rounded-lg font-bold transition duration-300 ${
              loading ? "opacity-50" : "hover:bg-sky-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sky-900">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-sky-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
