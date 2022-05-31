import React from "react";
import "./Table.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { useState, useEffect } from "react";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../../Service/getRequests";

export default function AgGridTable() {
  // const [data, setdata] = useState([]);

  // useEffect(async () => {
  //   const UserID = sessionStorage.getItem("UserID");
  //   const URL = `${requests.getMasterChecklists}?UserID=${UserID}&AppID=13`;
  //   const response = await PrepareRequest(URL);
  //   console.log("response", response.data);
  //   setdata(response.data);
  // }, []);
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

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
      headerName: "Checklist",
      field: "ChecklistName",
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
    },
  ];

  return (
    <React.Fragment>
      <div className="main-test-table">
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
    </React.Fragment>
  );
}
