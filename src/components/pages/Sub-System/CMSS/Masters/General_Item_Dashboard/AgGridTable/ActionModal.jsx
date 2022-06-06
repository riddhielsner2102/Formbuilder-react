import React, { useState } from "react";
import classes from "./ActionModal.module.css";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import { Container } from "react-bootstrap";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";
import Template from "../Modal/Template";
import ConfirmMessage from "../../../../../../ReusableComp/Message/ConfirmMessage";

export default function ActionModal(props) {
  // console.log("props.show", props.show);
  const [ModalData2, SetModal2] = useState({ show: false });
  const [deleteFlag, setDeleteFlag] = useState(false);

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };
  const deleteModel = () => {
    setDeleteFlag(true);
  };
  const deleteModelClose = () => {
    setDeleteFlag(false);
  };
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      {deleteFlag && (
        <ConfirmMessage
          text="delete"
          flag={deleteFlag}
          onCancel={() => deleteModelClose()}
          onConfirm={() => deleteModelClose()}
        />
      )}
      <div
        className="Modals2"
        style={{
          transform: "translateY(-100vh)",
          opcaity: props.show ? "1" : "0",
          width: "160px",
          backgroundColor: "#fff !important",
        }}
      >
        <Container
          className={[classes.divDow].join(" ")}>
          <Tooltip title="List Item " placement="right">
            <IconButton sx={{ height: "40px", width: "40px" }}>
              <FormatListBulletedOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Item" placement="right">
            <IconButton
              sx={{ height: "40px", width: "40px" }}
              onClick={() => {
                showNewModal();
              }}
            >
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy Item" placement="right">
            <IconButton sx={{ height: "40px", width: "40px" }}>
              <CopyrightOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Item" placement="left">
            <IconButton
              sx={{ height: "40px", width: "40px" }}
              onClick={() => {
                deleteModel();
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Container>
      </div>
    </>
  );
}
