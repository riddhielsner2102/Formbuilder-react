import React, { useState } from "react";
import Template from "../../../../Dashboard-Modal/Modal/Template";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Input, Button } from "arms_v2.8_webui";

const Checklistdashboard = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "30px 30px 70px 30px",
          backgroundColor: "#01396b",
          className: "header-main",
          // width: "100%",
        }}
      >
        <div
          style={{
            color: "#fff",
            display: "flex",
            fontSize: "19px",
            fontWeight: "bold",
            backgroundColor: "#01396b",
          }}
        >
          <CheckCircleOutlineIcon style={{ backgroundColor: "#01396b" }} />
          <font style={{ paddingLeft: "10px", backgroundColor: "#01396b" }}>
            Checklists
          </font>
        </div>
        <div>
          <font
            style={{
              color: "#fff",
              display: "flex",
              fontSize: "19px",
              fontWeight: "bold",
              backgroundColor: "#01396b",
            }}
          >
            Module: CMSS
          </font>
        </div>
        <div style={{ color: "#fff", backgroundColor: "#01396b" }}>
          <SearchOutlinedIcon style={{ backgroundColor: "#01396b" }} />
          <Input
            placeHolder="     Search Checklists"
            style={{
              backgroundColor: "#fff",
              width: "400px",
              // border: "none",
              outline: "none",
              borderRadius: "0px 30px 30px 0px",
            }}
          />
          {/* <CheckBox iconType="tick" /> */}
        </div>
        <Template
          show={ModalData2.show}
          modalClosed={() => {
            closeNewModal();
          }}
        />
        <div>
          <Button
            text="ADD"
            onClick={() => {
              showNewModal();
            }}
            style={{
              backgroundColor: "#fff !important",
              color: "#01396b",
              display: "inline-block",
              whiteSpace: "nowrap",
              textDecoration: "none",
              verticalAlign: "baseline",
              textAlign: "center",
              margin: 0,
              minWidth: "64px",
              lineHeight: "10px",
              borderRadius: "4px",
              overflow: "visible",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checklistdashboard;
