import React from "react";
import "./AgGridTable.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState } from "react";
import ActionModal from "./ActionModal";

function AgGridTable() {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("AgGrid Modal is opening");
  };

  const formBuilderData = () => {
    return {
      Sheet: [
        {
          id: 1,
          Header: 1,
          Template: "",
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
      Template: ele.Template,
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
      headerName: "Template",
      field: "Template",
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
      style: {
        color: "#fff",
        backgroundColor: "#01396b !important",
        boxSizing: "border-box",
        position: "relative",
        userSelect: "none",
        cursor: "pointer",
        outline: 0,
        border: "none",
        display: "inline-block",
        whiteSpace: "nowrap",
        textDecoration: "none",
        textAlign: "center",
        minWidth: "64px",
        borderRadius: "4px",
        overflow: "visible",
        transform: "translate3d(0,0,0)",
        transition:
          "background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)",
      },
      cellRendererParams: {
        text: "Actions",
        onClick: showNewModal,
      },
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center ",
        fontSize: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
      },
    },
  ];

  return (
    <>
      <div>
        <ActionModal
          show={ModalData2.show}
          modalClosed={() => {
            closeNewModal();
          }}
        />
      </div>
      <div className="main-table">
        <AgGrid
          rowData={newFormBuilder}
          columnData={contentData}
          frameworkComponents={frameworkComponents}
          headerHeight={52}
          style={{
            width: "80%",
            height: "540px",
            padding: "1% 10% 1% 10%",
            borderRadius: "15px",
            color: "#000",
          }}
        />
      </div>
    </>
  );
}

export default AgGridTable;
