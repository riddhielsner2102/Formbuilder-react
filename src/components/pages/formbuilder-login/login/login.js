import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import { Button, Input } from "arms_v2.8_webui";
import Logo from "../../../assets/images/logos/ARMS2.5-2 - Copy (2).png";
import "./login.css";
import { requests, PrepareRequest } from "../../../../Service/getRequests";
import { encryptedValues } from '../../../common/encryptedUserName&Password'
import { userSessionStorage } from '../../../common/sessionStorage'

function Login() {
  
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginData, setLoginData] = useState();
  const [invaliedLogin, setInvaliedLogin] = useState(false)
  const [isThereSubsystem, setIsThereSubsystem] = useState(true)
  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  
  const [encryptedUserName, encryptedPassword] = encryptedValues(userName, password)
  const onLogin = async (e) => {
    const URL = `${requests.validateLogin}?userName=${encryptedUserName}&password=${encryptedPassword}`;
    const response = await PrepareRequest(URL);
    setLoginData(response.data)
    userSessionStorage(response.data)
    const isAdmin = sessionStorage.getItem('IsAdmin')
    const subsystemID = parseInt(sessionStorage.getItem('SubsystemID'))
    response.data.UserID > 0 ? isAdmin === 'true' ? navigate('/pages/formbuilder/permission-setting/permission-dashboard') : subsystemID> 0 ? navigate('/pages/formbuilder/form-dashboard-version/dashboard') : setIsThereSubsystem(false) : setInvaliedLogin(true)
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
