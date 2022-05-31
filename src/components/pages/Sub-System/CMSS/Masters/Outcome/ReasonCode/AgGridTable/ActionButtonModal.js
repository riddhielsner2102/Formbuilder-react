import React, { useState } from "react";
import classes from "./ActionButtonModal.css";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";
import { Container } from "react-bootstrap";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import AddEditModel from "../Modal/AddEditModel";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import Tooltip from "@mui/material/Tooltip";

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
      <AddEditModel
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          // transform: props.show ? "translate(0)" : "translate(219vh, -90vh)",
          opcaity: props.show ? "1" : "0",
          width: "160px",
          backgroundColor: "#fff !important",
        }}
      >
        <Container
          // className={[classes.divDow].join(" ")}
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            width: "160px",
            height: "56px",
            padding: "8px 0",
            backgroundColor: "white",
          }}
        >
          <Tooltip title="List Reason Code" placement="right">
            <IconButton sx={{ height: "40px", width: "40px" }}>
              <FormatListBulletedOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Reason Code" placement="right">
            <IconButton
              sx={{ height: "40px", width: "40px" }}
              onClick={() => {
                showNewModal();
              }}
            >
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy Reason Code" placement="right">
            <IconButton sx={{ height: "40px", width: "40px" }}>
              <CopyrightOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Reason Code" placement="left">
            <IconButton sx={{ height: "40px", width: "40px" }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Container>
      </div>
    </React.Fragment>
  );
}
