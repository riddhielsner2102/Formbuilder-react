import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";

import { getSessionStorage } from "../../../../../../common/sessionStorage";
function AgGridTable(props) {
  const [data, setdata] = useState([])
  console.log(data, "data");
  const [showmessage, setshowmessage] = useState(false)
  // useEffect(async () => {
  //   if(data.length>0){
  //     props.setdisable(false)
  //   }else{
  //     props.setdisable(true)
  //   }
  //   const UserID = getSessionStorage('UserID')
  //   const URL = `${requests.getMasterItemRepository}?UserID=1&AppID=13`
  //   const response = await PrepareRequest(URL);
  //   setdata(response.data.lstModelItemRepository)
  
  // }, [])

  // useEffect(async () => {
  //   if (props.closed) {
  //     const UserID = getSessionStorage('UserID')
  //     const URL = `${requests.getMasterItemRepository}?UserID=1&AppID=13`
  //     const response = await PrepareRequest(URL);
    //   setdata(response.data.lstMasterFields)
  //     props.setdisable(false)
  //   }
  //   if(data.length>0){
  //     props.setdisable(false)
  //   }
  // }, [props.closed,data])
  const UserID=getSessionStorage("UserID")
  const URL = `${requests.getMasterFields}?UserID=${UserID}&AppID=13`

useEffect(async()=>{
      const response = await PrepareRequest(URL);
      setdata(response.data.lstMasterFields)
},[])

  const formBuilderData = () => {
    return {
      Sheet: [
        {
          id: 1,
          Header: 1,
          ID: "rgrtg",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
        {
          id: 2,
          Header: 2,
          ID: "eger",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
        {
          id: 3,
          Header: 3,
          ID: "efge",
          CreatedBy: "",
          CreatedOn: "",
          Action: "",
        },
        {
          id: 4,
          Header: 4,
          ID: "t34t",
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
      ID: ele.ID,
      CreatedBy: ele.CreatedBy,
      CreatedOn: ele.CreatedOn,
      Action: ele.Action,
    };
  });

  const [showAction, setShowAction] = useState(false)
  const [ModalData2, SetModal2] = useState({ show: false });
  const showNewModal = () => {
    console.log('action clicked')
    SetModal2({ show: true });
    setShowAction(!showAction)
  }

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const frameworkComponents = {
    gridButton: Button,
  };

  const contentData = [
    {
      headerName: "ID",
      field: "FieldId",
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
      headerName: "Field Name",
      field: "FieldName",
      width: 350,
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




  return (
    <div className="itemrepo-table">
      {/* <ActionButtonModal
      show={ModalData2.show}
      modalClosed={() => {
        
        closeNewModal();
      }}
      />  */}
      <AgGrid
        rowData={data}
        columnData={contentData}
        frameworkComponents={frameworkComponents}
        headerHeight={52}
        // onRowDoubleClicked={someHandler}
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
