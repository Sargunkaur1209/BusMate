import React, { useState } from "react";
import LoginBus from "../assets/LoginBus.png";
import axios from "axios";
const Login = () => {
  const [panel, setPanel] = useState("driver"); // 'driver' or 'admin'
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const LoginApi = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3000/user/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(result);
      if (result.data) {
        setMessage(result.message);
        setTimeout(() => {
          if (panel === "admin") {
            window.location.href = "/AdminPanel";
          } else {
            window.location.href = "/DriverPanel";
          }
        }, 1000);
      }
    } catch (err) {
      console.log("test",err.response.data.message);
        setMessage(err.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("Please fill in all the fields");
    } else {
      
      await LoginApi()
   
    }
  };

  return (
    <div className="HeroLogin">
      <img src={LoginBus} alt="LoginBus" className="BusImg" />
      <div className="login">
        <div className="panel-switch">
          <button
            className={`panel-btn-custom${panel === "admin" ? " active" : ""}`}
            type="button"
            onClick={() => setPanel("admin")}
          >
            Admin Panel
          </button>
          <button
            className={`panel-btn-custom${panel === "driver" ? " active" : ""}`}
            type="button"
            onClick={() => setPanel("driver")}
          >
            Driver Panel
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="login-heading">
            {panel === "admin" ? "Admin Login" : "Driver Login"}
          </h1>
          <h2 className="login-subheading">LOGIN HERE</h2>
          <label className="login-label" htmlFor="email">
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="login-input"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            className="login-input"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default Login;
