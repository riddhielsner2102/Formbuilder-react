import React from "react";
import "./AgGridTable.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState,useEffect } from "react";
import ActionModal from "./ActionModal";
import { PrepareRequest, requests } from "../../../../../../../../src/Service/getRequests";


function AgGridTable() {

  const [data, setdata] = useState([]);
  useEffect(async () => {

    const UserID = sessionStorage.getItem("UserID");
    const URL = `${requests.getMasterGeneralItemDashboard}?UserID=${UserID}&AppID=13`;
    const response = await PrepareRequest(URL);
    console.log("response", response.data);
    setdata(response.data);
  }, []);
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);
  const frameworkComponents = {
    gridButton: Button,
  };
  const [showAction, setShowAction] = useState(false)

  const showNewModal = () => {
    console.log('action clicked')
    setShowAction(!showAction)
  }

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      width: 100,
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        color: "#000",
      },
      style: {
        width: '10px',
        border: '1px solid black !important'
      }
    },

    {
      headerName: "Title",
      field: "MasterGeneralTitle",
      width: 600,
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex",
        fontSize: "15px",
        paddingTop: "6px",
        paddingBottom: "8px",

      },
    },
    {
      headerName: "Created By",
      field: "UserName",
      width: 250,
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        paddingTop: "6px",
        paddingBottom: "8px",
      },
    },
    {
      headerName: "Created On",
      field: "CreatedOn",
      width: 200,
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
      },
    },
    {
      headerName: "Actions",
      field: "UserName",
      cellRenderer: "gridButton",
      cellRendererParams: {
        text: "Actions",
        onClick: () => showNewModal(),
        style: {
          width: "80px",
          height: "40px",
          backgroundColor: "#01396b !important",
        },
      },
      cellStyle: {
        textAlign:"left",
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "20px",
        position: 'relative'
      },
    },
  ];


  return (
    <div className="main-content">
      <AgGrid
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        style={{
          width: "100%",
          height: "100vh",
          padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
      {showAction && <ActionModal show={showAction} modalClosed={() => showNewModal()} />}
    </div>
  );
}

export default AgGridTable;
