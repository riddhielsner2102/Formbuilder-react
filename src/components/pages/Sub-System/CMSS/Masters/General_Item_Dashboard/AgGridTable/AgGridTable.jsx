import React from "react";
import "./AgGridTable.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState } from "react";
// import ActionModal from "./ActionModal";

function AgGridTable() {
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
      field: "Header",
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
      headerName: "Checklist",
      field: "Checklist",
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
        // onClick: showNewModal,
      },
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
      },
    },
  ];

  return (
    <div className="main-table">
      <AgGrid
        rowData={newFormBuilder}
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
    </div>
  );
}

export default AgGridTable;
