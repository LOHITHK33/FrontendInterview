import React, { useState } from "react";
import Footer from "./components/Dashboard/Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === import.meta.env.VITE_USERNAME &&
      credentials.password === import.meta.env.VITE_PASSWORD
    ) {
      navigate("/dashboard");
    } else {
      navigate("/404");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>      
      </div>
      <Footer />
    </>
  );
}

export default Login;
