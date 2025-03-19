import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.password2) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.email || data.password || "Something went wrong");
      }

      setSuccess("Registration successful! Please log in.");
      setFormData({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1728272871420-39e50f3913f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white shadow-lg p-8 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          SIGN UP FOR BIKEWALE
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="agree" className="mr-2" required />
            <label htmlFor="agree" className="text-sm text-gray-600">
              I agree with{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                User Agreement & Privacy Policy
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
