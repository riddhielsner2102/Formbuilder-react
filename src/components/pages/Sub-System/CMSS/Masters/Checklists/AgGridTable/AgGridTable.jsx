import React from "react";
import "./AgGridTable.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState, useEffect } from "react";
import ActionModal from "./ActionModal";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../Service/getRequests";

export default function AgGridTable() {
  const [data, setdata] = useState([]);

  useEffect(async () => {
    const UserID = sessionStorage.getItem("UserID");
    const URL = `${requests.getMasterChecklists}?UserID=${UserID}&AppID=13`;
    const response = await PrepareRequest(URL);
    console.log("response", response.data);
    setdata(response.data);
  }, []);
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("Action Modal");
  };

  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      cellStyle: {
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        color: "#000",
      },
    },

    {
      headerName: "Checklist",
      field: "ChecklistName",
      cellStyle: {
        color: "#000",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        textAlign: "center",
        // paddingTop: "6px",
        // paddingBottom: "8px",
      },
    },
    {
      headerName: "Created By",
      field: "UserName",
      cellStyle: {
        color: "#000",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        // paddingTop: "6px",
        // paddingBottom: "8px",
      },
    },
    {
      headerName: "Created On",
      field: "CreatedOn",
      cellStyle: {
        color: "#000",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
      },
    },
    {
      headerName: "Actions",
      field: "Action",
      cellRenderer: "gridButton",
      cellRendererParams: {
        text: "Actions",
        onClick: showNewModal,
        style: {
          width: "80px",
          height: "40px",
          backgroundColor: "#01396b !important",
        },
      },
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "20px",
      },
    },
  ];

  return (
    <div className="main-dashboard-table">
      <ActionModal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      <AgGrid
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        pagination={true}
        paginationPageSize={10}
        style={{
          width: "100%",
          height: "800px",
          padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
    </div>
  );
}
