import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:2008/api/admin/login", {
        mobileNo,
        password,
      });

      if (response.data.statuscode === 200 && response.data.token) {
        // Store token in cookies if it is valid
        setCookie("authToken", response.data.token, { path: "/" });
        // alert(response.data.message); // Optionally show success message
        // Redirect or handle successful login
        navigate("/");
      } else {
        // Remove token if exists, as credentials are invalid
        removeCookie("authToken");
        alert(response.data.msg); // Handle login failure
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Remove token if exists, as there's an error
      removeCookie("authToken");
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="login-back position-relative">
        <img src="/src/assets/images/login.jpg" alt="" className="login-back" />
        <div className="position-absolute top-0 end-50"></div>
        <div className="position-fixed top-0 nika-logo-login end-0 mx-5">
          <img src="/src/assets/images/nika 1 (1).png" alt="" />
        </div>
        <div className="position-fixed nika-login-back bottom-0">
          <img src="/src/assets/images/5899994_3071304 (1) (1) 1.png" alt="" />
        </div>
        <div className="position-fixed bottom-0 nika-login-back-eclips end-0">
          <img src="/src/assets/images/elips.png" alt="" />
        </div>
        <div className="position-fixed w-100 login-form1 p-2">
          <div className="container">
            <form onSubmit={handleLogin}>
              <div className="span">
                <span className="border-bottom h3 pb-1 fw-bold border-dark d-inline-block mb-4">
                  Log In
                </span>
              </div>
              <div className="row flex-column gy-3">
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-between align-items-center py-1 inputs position-relative">
                  <div className="login-icon me-2">
                    <img src="/src/assets/images/profile 1.png" alt="" />
                  </div>
                  <input
                    type="number"
                    name="mobileNo"
                    className="w-100 border-0"
                    placeholder="Mobile Number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-between align-items-center py-1 inputs position-relative">
                  <div className="login-icon me-2">
                    <img src="/src/assets/images/padlock 1 (1).png" alt="" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="w-100 border-0"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-between align-items-center py-1 position-relative">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="login-submit border-0 px-4 py-1"
                    value="Log In"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
