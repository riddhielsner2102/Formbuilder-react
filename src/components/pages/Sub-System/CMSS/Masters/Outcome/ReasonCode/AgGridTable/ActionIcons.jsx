import React, { useState } from "react";
import "./ActionButtonModal.css";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";
import { Container } from "react-bootstrap";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import AddEditModel from "../Modal/AddEditModel";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import Tooltip from "@mui/material/Tooltip";
import ConfirmMessage from "../../../../../../../ReusableComp/Message/ConfirmMessage";
import { Button } from "arms_v2.8_webui";

const ActionIcons = (props) => {

    return (
        <>
            <Backdrop
                show={props.showAction}
            // clicked={props.modalClosed} 
            />
            <div
                className="Modal"
                style={{
                    // transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    // opcaity: props.show ? "1" : "0",
                    width: "180px",
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
                        // onClick={() => {
                        //     showNewModal();
                        // }}
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
                        <IconButton
                            sx={{ height: "40px", width: "40px" }}
                        // onClick={() => {
                        //     deleteModel();
                        // }}
                        >
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Container>
            </div>
        </>
    )
}

export default ActionIcons