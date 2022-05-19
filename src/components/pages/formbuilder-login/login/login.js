import * as React from "react";
import { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { Input, Button } from "arms_v2.8_webui";
import Logo from "../../../assets/images/logos/ARMS2.5-2 - Copy (2).png";
import "./login.css";

function Login() {
  const [userName, setUsername] = useState();

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const [password, setPassword] = useState();

  const handlePassword = (e) => {
    setPassword(e.target.value);
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
                <Button text="LOGIN" />
              </Col>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
