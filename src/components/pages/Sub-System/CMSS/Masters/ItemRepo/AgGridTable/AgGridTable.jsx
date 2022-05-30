import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";
import ActionButtonModal from "../AgGridTable/ActionButtonModal";
import { getSessionStorage } from "../../../../../../common/sessionStorage";

function AgGridTable(props) {
  const [data, setdata] = useState([])
  const [showmessage, setshowmessage] = useState(false)
  useEffect(async () => {
    if (props.closed === false) {
      const UserID = getSessionStorage('UserID')
      const URL = `${requests.getMasterItemRepository}?UserID=1&AppID=13`
      const response = await PrepareRequest(URL);
      setdata(response.data.lstModelItemRepository)

    } else {
      const UserID = getSessionStorage('UserID')
      const URL = `${requests.getMasterItemRepository}?UserID=1&AppID=13`
      const response = await PrepareRequest(URL);
      setdata(response.data.lstModelItemRepository)
    }
    // console.log('response', response.data)
  }, [props.closed])

  useEffect(() => {
    console.log('data', data)
    if (data.length > 0) {
      props.setdisable(false)
    } else if (data.length > 0 && props.disable) {
      setshowmessage(true)
    }
    else {
      props.setdisable(true)
    }
  }, [data])

  const [showAction, setShowAction] = useState(false)
  const showNewModal = () => {
    console.log('action clicked')
    setShowAction(!showAction)
  }

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
      field: "RepTitle",
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
      headerName: "Is Active",
      field: "IsActive",
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
      headerName: "Created By",
      field: "CreatedBy",
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
        // paddingTop: "5px",
        // paddingBottom: "5px",
      },
    },
  ];
  const someHandler = (e) => {
    
     console.log(e.data,"index") 
      };



  return (
    <div className="itemrepo-table">
      <AgGrid
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        onRowDoubleClicked={someHandler}
        style={{
          width: "100%",
          height: "100vh",
          padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />
      {showAction && <ActionButtonModal />}
      {showmessage && <Message setshowmessage={setshowmessage} />}
    </div>
  );
}

export default AgGridTable;
