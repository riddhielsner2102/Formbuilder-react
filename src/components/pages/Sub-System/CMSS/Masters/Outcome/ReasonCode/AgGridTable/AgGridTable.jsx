import React, { useEffect, useState } from "react";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../../Service/getRequests";
import './AgGridTable.css'
import ActionButtonModal from "./ActionButtonModal";

function AgGridTable() {
  const [data, setdata] = useState([])
  useEffect(async () => {
    const UserID = sessionStorage.getItem('UserID')
    const URL = `${requests.getMasterReasonCode}?UserID=${UserID}&AppID=13`
    const response = await PrepareRequest(URL);
    console.log('response', response.data)
    setdata(response.data)
  }, [])
  useEffect(() => {
    console.log('data', data)
  }, [data])

  const [showAction, setShowAction] = useState(false)
  const showNewModal = () => {
    console.log('action clicked')
    setShowAction(!showAction)
  }

  const formBuilderData = () => {
    return {
      Sheet: [
        {
          id: 1,
          Header: 1,
          Checklist: "",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
        {
          id: 2,
          Header: 2,
          Checklist: "",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
        {
          id: 3,
          Header: 3,
          Checklist: "",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
      ],
    };
  };

  const newFormBuilder = formBuilderData().Sheet.map((ele, i) => {
    return {
      id: ele.id,
      Header: ele.Header,
      Checklist: ele.Checklist,
      CreatedBy: ele.CreatedBy,
      CreatedOn: ele.CreatedOn,
      Action: ele.Action,
    };
  });

  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        color: "#000",
      },
    },

    {
      headerName: "Title",
      field: "ReasonCodeTitle",
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        textAlign: "center",
        paddingTop: "6px",
        paddingBottom: "8px",
      },
    },
    {
      headerName: "Created By",
      field: "CreatedBy",
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
      field: "Action",
      cellRenderer: "gridButton",
      cellRendererParams: {
        text: "Actions",
        style: {
          width: "80px",
          height: "40px",
          backgroundColor: "#01396b !important",
        },
        onClick: () => showNewModal(),
      },
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "20px",
        // paddingTop: "5px",
        // paddingBottom: "5px",
      },
    },
  ];

  return (
    <div className="reasoncode-table">
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
      {showAction && <ActionButtonModal />}
    </div>
  );
}

export default AgGridTable;
