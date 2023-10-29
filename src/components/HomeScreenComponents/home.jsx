import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomeImage from "../../assets/DoIt.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import cookie from "react-cookies";
import { message } from "antd";
import axios from "axios";

import "./index.css";
function Main() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleTogglePassword = () => {
    setVisible(!visible);
  };

  //////
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`http://127.0.0.1:8001/api/login`, {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      const { user } = response.data;

      cookie.save("auth_token", JSON.stringify(response.data.user), {
        maxAge: 5 * 60 * 60 * 1000,
      });

      cookie.save("user", JSON.stringify(response.data.user), {
        maxAge: 5 * 60 * 60 * 1000,
      });

      if (true) {
        navigate("/TodoPAge");
        console.log("User successfully logged in");
      } else {
        console.log("Logged-in failed");
      }

      if (response.data.member) {
        window.location.reload();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        message.error(error.response.data.message);
        console.log(error.response);
      } else {
        message.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="parentHome">
      <div className="home-container-box-Left-one">
        <img className="homeImage" src={HomeImage} alt="homepageImage" />

        <p className="paragraph-container-box-Left-one">I Do It !</p>
      </div>

      <div className="parent-home-container-login">
        <div className="home-container-login">
          <h2>Time To Work ! </h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="input-email  input-type"
              type="email"
              name="email"
              required={true}
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
              className="input-password input-type"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button className="button-signIn">SING IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
