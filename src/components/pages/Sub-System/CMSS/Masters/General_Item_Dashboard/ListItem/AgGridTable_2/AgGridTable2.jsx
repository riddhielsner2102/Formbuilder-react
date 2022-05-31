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
    const URL = `${requests.getAssesmentTypeOptions}?AssessmentTypeID=126&AppID=13&ItemTypeID=3`;
    const response = await PrepareRequest(URL);
    console.log("response", response.data);
    setdata(response.data.lstModelMasterAssessmentOption);
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
        
        // width:"30px",
      },
    },

    {
      headerName: "Options",
      field:"Options",
      width: 400,
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
      // field: "UserName",
      // width:200,

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
        // paddingTop: "5px",
        // paddingBottom: "5px",
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
          // padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
    </div>
  );
}

export default AgGridTable2;
