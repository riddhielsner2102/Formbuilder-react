import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logos/icons8-user-avatar-48.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import FilterVintageOutlinedIcon from "@mui/icons-material/FilterVintageOutlined";
import Avatar from "@mui/material/Avatar";

import "./Header.css";
import Permission from "./Permission/Permission";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Header(props) {
  const node = useRef();
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };

  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  const logOut = () => {
    sessionStorage.setItem("UserID", "0");
    navigate("/pages/formbuilder-login/login");
  };

  const clickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setFlag(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  return (
    <Container
      style={{
        borderBottom: "0px solid #F5F5F5",
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "64px",
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
            whiteSpace: "no-wrap",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="defaultHeadIcon headerIcon"
            onClick={props.handleDrawerOpen}
          >
            <MenuOutlinedIcon />
          </div>
          <div style={{ padding: "0 16px" }}>ARMS eFORMS</div>
        </div>
        <div className="container" ref={node}>
          <Button
            style={{
              backgroundColor: "#F5F5F5",
              color: "black",
              height: "64px",
              width: "130px",
              display: "flex",
              justifyContent: "space-between",
            }}
            color="#F5F5F5"
            startIcon={<Avatar alt="Remy Sharp" src={Logo} />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            text="AD"
            onClick={() => setFlag(!flag)}
          />
          {flag && (
            <div class="dropdown" style={{ background: "#fff" }}>
              <ul>
                <li onClick={() => logOut()}>
                  <LogoutIcon sx={{ color: "rgba(0, 0, 0, 0.47)" }} />
                  &nbsp; Logout
                </li>
                <li onClick={() => showNewModal()}>
                  <FilterVintageOutlinedIcon
                    sx={{ color: "rgba(0, 0, 0, 0.47)" }}
                  />
                  &nbsp; Permission
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}

export default Header;
