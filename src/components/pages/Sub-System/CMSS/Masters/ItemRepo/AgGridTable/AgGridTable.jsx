import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";
import ActionButtonModal from "../AgGridTable/ActionButtonModal";
import Edititemmodal from "../Modal/EditItemmodal";
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
        {
          id: 4,
          Header: 4,
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

  const [showAction, setShowAction] = useState(false)
  const showNewModal = () => {
    console.log('action clicked')
    setShowAction(!showAction)
  }
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
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
  const[edit,setedit]=useState(false)
  const[editdata,seteditdata]=useState([])
  const someHandler = (e) => {
    setedit(true)
    seteditdata(e.data)
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
     {/* <ActionButtonModal
      show={ModalData2.show}
      modalClosed={() => {
        closeNewModal();
      }}
      />  */}
          {edit && <Message setedit={setedit} seteditdata={seteditdata} editdata={editdata}/>}
      {/* {edit && <Message setshowmessage={setshowmessage} setedit={setedit} />} */}
    </div>
  );
}

export default AgGridTable;
