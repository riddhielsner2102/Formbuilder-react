import React, { useEffect, useState } from "react";
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
import ActionIcons from "./ActionIcons";
import { PrepareRequest, requests } from "../../../../../../../../Service/getRequests";

export default function ActionModal(props) {
  const [data, setData] = useState([])
  const [showAction, setShowAction] = useState(false)
  const invokeParentMethod = () => {
    console.log('first')
    setData([...data, props.data])
    setShowAction(!showAction)
  };
  console.log('data', data)

  const [editFlag, SetEditFlag] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false)

  const closeNewModal = () => {
    SetEditFlag(false);
  };
  const showNewModal = () => {
    SetEditFlag(true);
    console.log("template Modal");
  };

  const [ReasonCodeID, setReasonCodeID] = useState(null)
  useEffect(() => {
    setReasonCodeID(data[0]?.ReasonCodeID)
  }, [data])

  const deleteModel = async () => {
    const URL = `${requests.validateMasterReasonCode}?ReasonCodeID=${ReasonCodeID}`
    const response = await PrepareRequest(URL);
    console.log('deleteModel', response.data)
    setDeleteFlag(true)
  }
  const deleteConfirm = async () => {
    const URL = `${requests.deleteMasterReasonCode}?ReasonCodeID=${ReasonCodeID}`
    const response = await PrepareRequest(URL);
    console.log('deleteConfirm', response.data)
    setDeleteFlag(false)
  }
  const deleteModelClose = () => {
    setDeleteFlag(false)
  }

  return (
    <React.Fragment>
      <AddEditModel
        show={editFlag}
        modalClosed={() => {
          closeNewModal();
        }}
        data={data}
      />
      {deleteFlag && <ConfirmMessage
        text='delete'
        flag={deleteFlag}
        onCancel={() => deleteModelClose()}
        onConfirm={() => deleteConfirm()}
      />}
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
      {/* {showAction &&
        <AddEditModel
          show={showAction}
          modalClosed={() => {
            closeNewModal();
          }}
        />
      } */}
      {/* {showAction && <ActionIcons showAction={showAction} />} */}
      {showAction &&
        <>
          <Backdrop
            show={showAction}
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
      }
    </React.Fragment>
  );
}
