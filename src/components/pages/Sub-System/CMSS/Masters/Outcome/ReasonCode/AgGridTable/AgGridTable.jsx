import React, { useEffect, useMemo, useState } from "react";
import { Button, AgGrid } from "arms_v2.8_webui";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../../Service/getRequests";
import "./AgGridTable.css";
import ActionButtonModal from "./ActionButtonModal";
import ActionIcons from "./ActionIcons";

function AgGridTable() {
  const [data, setdata] = useState([]);

  useEffect(async () => {
    const UserID = sessionStorage.getItem('UserID')
    const AppID = sessionStorage.getItem('SubsystemID')
    const URL = `${requests.getMasterReasonCode}?UserID=${UserID}&AppID=13`
    const response = await PrepareRequest(URL);    console.log('response', response.data)
    setdata(response.data)
  }, [])

  const [showAction, setShowAction] = useState(false);

  const showNewModal = (e) => {
    console.log('e', e)
    console.log('action clicked')
    setShowAction(!showAction)
  }

  const frameworkComponents = {
    gridButton: Button,
    gridComponent: ActionButtonModal
  };

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      width: 100,
      cellStyle: {
        display: "flex ",
        justifyContent: "left",
        alignItems: "center ",
        fontSize: "15px",
        color: "#000",
      },
      style: {
        width: "10px",
        border: "1px solid black !important",
      },
    },
    {
      headerName: "Title",
      field: "ReasonCodeTitle",
      cellStyle: {
        color: "#000",

        display: "flex ",
        justifyContent: "left",
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

        display: "flex ",
        justifyContent: "left",
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

        display: "flex ",
        justifyContent: "left",
        alignItems: "center ",
        fontSize: "15px",
      },
    },
    {
      headerName: "Actions",
      field: "Action",
      cellRenderer: "gridComponent",
      // cellRendererParams: {
      //   text: "Actions",
      //   style: {
      //     width: "80px",
      //     height: "40px",
      //     backgroundColor: "#01396b !important",
      //   },
      // onClick: () => showNewModal(),
      // },
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex ",
        justifyContent: "left",
        alignItems: "center ",
        fontSize: "20px",
        // paddingTop: "5px",
        // paddingBottom: "5px",
        position: "relative",
      },
    },
  ];

  const popupParent = useMemo(() => {
    console.log('popupParent')
    return document.querySelector('ReasonCodeModal');
  }, []);

  return (
    <div className="reasoncode-table">
      <AgGrid
        // onCellClicked={showNewModal}
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        // popupParent={popupParent}
        pagination={true}
        paginationPageSize={10}
        style={{
          width: "100%",
          height: "820px",
          padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
      {/* {showAction &&
        <ActionIcons show={showAction} modalClosed={() => showNewModal()} />
      } */}
      {/* {showAction && <ActionButtonModal show={showAction} modalClosed={() => showNewModal()} />} */}
    </div>
  );
}

export default AgGridTable;
