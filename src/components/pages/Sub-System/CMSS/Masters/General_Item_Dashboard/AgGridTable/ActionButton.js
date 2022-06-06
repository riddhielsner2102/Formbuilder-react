import React, { useEffect, useState } from "react";
// import "./ActionModal.css";
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
import { Button } from "arms_v2.8_webui";
import Template from "../Modal/Template";
import ConfirmMessage from "../../../../../../ReusableComp/Message/ConfirmMessage";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../Service/getRequests";
import { useNavigate } from "react-router-dom";

export default function ActionModal(props) {
  const navigate = useNavigate();
  const UserID = sessionStorage.getItem("UserID");
  const [data, setData] = useState([]);
  const [showAction, setShowAction] = useState(false);
  const invokeParentMethod = () => {
    console.log("first");
    setData([...data, props.data]);
    setShowAction(!showAction);
  };
  console.log("data", data);

  const [GmDashCodeID, setGmDashCodeID] = useState(null);
  useEffect(() => {
    console.log(data);
    setGmDashCodeID(data[0]?.MasterGeneralID);
  }, [data]);

  // List Route
  const listNavigate = () => {
    navigate(
      `/pages/formbuilder/permission-setting/permission-dashboard/Ddcpy/${GmDashCodeID}`,
      { state: data }
    );
  };

  // Edit API
  const [editFlag, SetEditFlag] = useState(false);
  const closeNewModal = () => {
    SetEditFlag(false);
  };
  const showNewModal = () => {
    SetEditFlag(true);
  };

  // Delete API
  const [deleteFlag, setDeleteFlag] = useState(false);
  const deleteModel = async () => {
    const URL = `${requests.validateGeneralItemDashboard}?GmDashCodeID=${GmDashCodeID}`;
    const response = await PrepareRequest(URL);
    console.log("deleteModel", response.data);
    setDeleteFlag(true);
  };
  const deleteConfirm = async () => {
    const URL = `${requests.validateGeneralItemDashboard}?GmDashCodeID=${GmDashCodeID}`;
    const response = await PrepareRequest(URL);
    console.log("deleteConfirm", response.data);
    setDeleteFlag(false);
  };
  const deleteModelClose = () => {
    setDeleteFlag(false);
  };

  // Copy API
  const [copyFlag, setCopyFlag] = useState(false);
  const copyModel = () => setCopyFlag(true);
  const copyConfirm = async () => {
    // http://localhost:61240/api/v1/FormBuilder/CopyAssessment?AssesmentTypeID=155&UserID=3
    //     AssesmentTypeID: 155
    // UserID: 3
    const URL = `${requests.copyAssessment}?AssesmentTypeID=${GmDashCodeID}&UserID=${UserID}`;
    const response = await PrepareRequest(URL);
    console.log("copyConfirm", response.data);
    setCopyFlag(false);
    // CopyAssessment?AssesmentTypeID=221&UserID=3
  };
  const copyeModelClose = () => setCopyFlag(false);
  return (
    <React.Fragment>
      {editFlag && (
        <Template
          show={editFlag}
          modalClosed={() => {
            closeNewModal();
          }}
          data={data}
        />
      )}
      {deleteFlag && (
        <ConfirmMessage
          text="delete"
          flag={deleteFlag}
          onCancel={() => deleteModelClose()}
          onConfirm={() => deleteModelClose()}
        />
      )}
      {copyFlag && (
        <ConfirmMessage
          text="Do you want to copy the ReasonCode?"
          flag={copyFlag}
          onCancel={() => copyeModelClose()}
          onConfirm={() => copyConfirm()}
        />
      )}
      <Button
        text="Actions"
        style={{
          width: "80px",
          height: "40px",
          backgroundColor: "#01396b !important",
          zIndex: "10",
        }}
        onClick={invokeParentMethod}
      />
      {showAction && (
        <>
          <Backdrop show={props.show} clicked={props.modalClosed} />
          <div
            className="Modals_2"
            style={{
              // transform: "translateY(-100vh)",
              // opcaity: props.show ? "1" : "0",
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
              <Tooltip title="List Item " placement="right">
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  onClick={() => listNavigate()}
                >
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
                <IconButton
                  sx={{ height: "40px", width: "40px" }}
                  onClick={() => copyModel()}
                >
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
      )}
    </React.Fragment>
  );
}
