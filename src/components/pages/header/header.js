import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logos/icons8-user-avatar-48.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import Permission from "./Permission/Permission";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Button, Label } from "arms_v2.8_webui";

function Header() {
  const [flag, setFlag] = useState(false);

  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };

  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  return (
    <Container
      style={{
        padding: "20px 8px 5px 8px",
        borderBottom: "0px solid #F5F5F5",
        backgroundColor: "#F5F5F5",
        width: "100%",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <Permission
          show={ModalData2.show}
          modalClosed={() => {
            closeNewModal();
          }}
        />
        <div
          style={{
            color: "#01396b",
            fontWeight: "bolder",
            padding: "0 16px",
            whiteSpace: "no-wrap",
            fontSize: "20px",
          }}
        >
          ARMS eFORMS
        </div>
        <div
          className="ImgDiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingRight: "20px" }}>
            <img src={Logo} alt="logo" style={{ width: "40px" }} />
          </div>
          <div>AD</div>
          <div className="dropBtn">
            <IconButton onClick={() => setFlag(!flag)}>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          </div>
          {flag && (
            <div className="dropContent">
              <Link to="/">Logout</Link>
              <br />
              <Link
                to=""
                onClick={() => {
                  showNewModal();
                }}
              >
                Permission
              </Link>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}

export default Header;
