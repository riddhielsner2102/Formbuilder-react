import React, { useState } from "react";
import classes from "./ActionModal.module.css";
import Backdrop from "../Dashboard-Modal/components/Backdrop";
import Aux from "../Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import { Container } from "react-bootstrap";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Template from "../Dashboard-Modal/Modal/Template";

export default function ActionModal(props) {
  //   render() {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opcaity: props.show ? "1" : "0",
        }}
      >
        <Container
          className={[classes.divDow].join(" ")}
          style={{
            padding: "0px",
            marginTop: "10%",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <IconButton
            onClick={() => {
              showNewModal();
            }}
          >
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Container>
      </div>
    </Aux>
  );
  //   }
}
