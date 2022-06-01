import React from "react";
import "./AgGridTable2.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState,useEffect } from "react";
import { PrepareRequest, requests } from "../../../../../../../../Service/getRequests";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function AgGridTable2() {

  const [data, setdata] = useState([]);
  useEffect(async () => {

    // const UserID = sessionStorage.getItem("UserID");
    const URL = `${requests.getAssesmentTypeOptions}?AssessmentTypeID=121&AppID=13&ItemTypeID=3`;
    // GetAssesmentTypeOptions?AssessmentTypeID=126&AppID=13&ItemTypeID=3
    const response = await PrepareRequest(URL);
    console.log("response", response.data.lstModelMasterAssessmentOption);
    setdata(response.data.lstModelMasterAssessmentOption);
  }, []);


  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "ID",
      field: "ID",
      width: 100,
      style:{
         justifyContent: "left",
        },
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
      headerName: "Options",
      field:"Options",
      width: 400,
      cellStyle: {
        color: "#000",
        height: "100%",
        display: "flex",
        alignItems: "center ",
        fontSize: "15px",
        // textAlign: "center",
        paddingTop: "6px",
        paddingBottom: "8px",

      },
    },
    {
      headerName: "Option value",
      field: "OptionValue",
      width: 200,
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
      headerName: "Short Name",
      field: "OptShortName",
      width: 180,
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
        headerName: "Result",
    field: "ResultValue",
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
        headerName: "Order",
        field: "AssessmentItemOrder",
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
      cellRenderer: "gridButton",
      cellRendererParams: {
        text: <DeleteOutlineIcon/>,
        // onClick: showNewModal,
        // titleIcon:<DeleteOutlineIcon/>,
        style: {
          width: "76px", height: "38px", backgroundColor: "inherit", color: "black"
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
      },
    },
  ];


  return (
    <div className="content_2">
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
    </div>
  );
}

export default AgGridTable2;
