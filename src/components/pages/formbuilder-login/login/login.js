import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import { Button, Input } from "arms_v2.8_webui";
import Logo from "../../../assets/images/logos/ARMS2.5-2 - Copy (2).png";
import "./login.css";
import { requests, PrepareRequest } from "../../../../Service/getRequests";
import { encryptedValues } from '../../../common/encryptedUserName&Password'

function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let navigate = useNavigate();
  
  const [encryptedUserName, encryptedPassword] = encryptedValues(userName, password)
  const onLogin = async (e) => {
    let path = `mainContent`;
    navigate(path);
    let URL = `${requests.validateLogin}?userName=${encryptedUserName}&password=${encryptedPassword}`;
    const loginData = await PrepareRequest(URL);
  };

  return (
    <Container>
      <div id="login">
        <div id="login-form-wrapper">
          <div id="login-form">
            <div className="logo">
              <img className="logo-icon" src={Logo} alt="Logo" />
            </div>
            <div className="title">
              <h3>LOGIN TO ARMS eFORMS</h3>
            </div>
            <form className="loginForm">
              <Col>
                <Input
                  value={userName}
                  name="username"
                  type="username"
                  onChange={(e) => handleUser(e)}
                  style={{ border: "1px solid #000", width: "100%" }}
                />
              </Col>
              <Col style={{ marginTop: "25px" }}>
                <Input
                  value={password}
                  name="password"
                  type="password"
                  onChange={(e) => handlePassword(e)}
                  style={{ border: "1px solid #000", width: "100%" }}
                />
              </Col>
              <Col className="button-wrap">
                <Button
                  onClick={(e) => {
                    onLogin(e);
                  }}
                  text="LOGIN"
                />
              </Col>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
