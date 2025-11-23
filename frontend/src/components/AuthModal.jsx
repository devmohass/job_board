import React, { useState } from "react";
import axios from "axios";

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "", // ✅ role added
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:2000/api/auth/login"
      : "http://localhost:2000/api/auth/register";
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData; // ✅ sends full data incl. role

    try {
      const response = await axios.post(endpoint, payload);

      alert(`${isLogin ? "Login" : "Registration"} successful!`);

      // ✅ Store role & token (optional for role-based UI)
      localStorage.setItem("role", response.data.role);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      onClose(); // close modal
      window.location.reload(); // refresh navbar role
    } catch (error) {
      console.error("Auth error:", error.response?.data || error.message);
      alert(
        "Failed: " + (error.response?.data?.message || "Something went wrong")
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded font-medium ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded font-medium ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mb-4"
                required
              />

              {/* ✅ Role selection dropdown */}
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mb-4 text-gray-600"
                required
              >
                <option value="">Select Role</option>
                <option value="USER">USER</option>
                {/* <option value="ADMIN">ADMIN</option> */}
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-4"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
