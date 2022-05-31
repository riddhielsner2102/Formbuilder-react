import React, { useState } from "react";
import classes from "./ActionModal.module.css";
import Backdrop from "../Modal/Backdrop";
import { Container } from "react-bootstrap";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Template from "../Modal/Template";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import Tooltip from "@mui/material/Tooltip";
import TestPage from "../TestPage/TestPage";

export default function ActionModal(props) {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      {/* <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      /> */}
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
          <Tooltip title="List Checklist" placement="right">
            <IconButton onClick={<TestPage />}>
              <FormatListBulletedOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Checklist" placement="right">
            <IconButton
              onClick={() => {
                showNewModal();
              }}
            >
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy Checklist" placement="right">
            <IconButton>
              <CopyrightOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Checklist" placement="right">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Container>
      </div>
    </React.Fragment>
  );
}
