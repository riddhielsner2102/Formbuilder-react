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


  useEffect(() => {

    console.log("data", data);

  }, [data]);

  // const formBuilderData = () => {
  //   return {
  //     Sheet: [
  //       {
  //         id: 1,
  //         Header: 1,
  //         Title: "",
  //         CreatedBy: "",
  //         CreatedOn: "",
  //         Action: "",
  //       },
  //     ],
  //   };
  // };

  // const newFormBuilder = formBuilderData().Sheet.map((ele, i) => {
  //   return {
  //     id: ele.id,
  //     Header: ele.Header,
  //     Title: ele.Title,
  //     CreatedBy: ele.CreatedBy,
  //     CreatedOn: ele.CreatedOn,
  //     Action: ele.Action,
  //   };
  // });

  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      width: 150,
      // style:{
      //    justifyContent: "left",
      //   alignItems: "center",},
      cellStyle: {
        height: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        color: "#000",
        // width:"30px",
      },
    },

    {
      headerName: "Title",
      field: "MasterGeneralTitle",
      width: 500,
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        flexWrap:"wrap",
        alignItems: "center ",
        fontSize: "15px",
        // wordWrap: "break-word !important",
        // wordBreak: "break-word",
        textAlign: "center",
        paddingTop: "6px",
        paddingBottom: "8px",

      },
      style:{
        wordWrap: "break-word !important",
        wordBreak: "break-word",
      }
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
      // width:200,

      cellRenderer: "gridButton",
      cellRendererParams: {
        text: "Actions",
        // onClick: showNewModal,
        style: {
          width: "76px", height: "38px", backgroundColor: "#01396b !important", color: "#ffffff"
      }
      },
      cellStyle: {
        textAlign:"left",
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
    <div className="main-content">
      <AgGrid
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        style={{
          width: "100%",
          height: "100vh",
          // padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
    </div>
  );
}

export default AgGridTable;
