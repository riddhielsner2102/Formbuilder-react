import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button,AgGrid } from "arms_v2.8_webui";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../Service/getRequests";
import ActionButtonModal from "../AgGridTable/ActionButtonModal";
import Edititemmodal from "../Modal/EditItemmodal";
import { getSessionStorage } from "../../../../../../common/sessionStorage";
import AGrid from "../../../../../../../AgGrid"
import { postapis } from "../../../../../../../Service/postRequests";
import ConfirmMessage from "../../../../../../ReusableComp/Message/ConfirmMessage";
function AgGridTable(props) {
  const [data, setdata] = useState([])
  console.log(data, "data");
  const [showmessage, setshowmessage] = useState(false)
  const UserID=getSessionStorage("UserID")
  const URL = `${requests.getMasterItemRepository}?UserID=${UserID}&AppID=13`
useEffect(async()=>{
  const response = await PrepareRequest(URL);
  setdata(response.data.lstModelItemRepository)
  props.setdisable(false)
},[])
    useEffect(async()=>{
          if(props.closed){
            const response = await PrepareRequest(URL);
            setdata(response.data.lstModelItemRepository)
            props.setdisable(false)
            props.setclosed(false)
            setshowmessage(true)
          }
    },[props.closed])

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
  const [update, setUpdate] = useState(false)
  const [confirm, setconfirm] = useState(false)
  const [editdata, seteditdata] = useState()
  const editHandler = (e) => {
    // console.log(val,"jkbhcdj")
    handleUpdate(true,e.data)
    //  seteditdata(e.data)
    //  setUpdate(true)

      
    }
    // console.log(e.data, "index")
  
  const handleUpdate =async (e) => {
    // setUpdate(bool)
    // seteditdata(data)
    const deleteurl = `${requests.validateDeletionItemRepository}?RepID=${e.data.RepID}`;
    const response = await PrepareRequest(deleteurl);

  }
  const[RepID,setRepID]=useState()
  const deletedata=async(e)=>{
    const deleteurl = `${requests.validateDeletionItemRepository}?RepID=${e.data.RepID}`;
    const response = await PrepareRequest(deleteurl);
    setconfirm(true)
    setRepID(e.data.RepID)
  }
  
  // console.log(edit,"edit");

const Removemsterapi=async()=>{
  const removeURL=`${requests.removeMasterItemRepository}?RepID=${RepID}`;
  const response = await PrepareRequest(removeURL);

  setconfirm(false)
  const getdata = await PrepareRequest(URL);

}
const onCancel=()=>{
  setconfirm(false)
}
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
        // onRowDoubleClicked={editHandler}
        onRowClicked={deletedata}
        pagination={true}
        paginationPageSize={10}
        style={{
          width: "100%",
          height: "100vh",
          padding: "1% 3% 1% 3%",
          borderRadius: "8px 8px 0px 0px",
          color: "#000",
        }}
      />

      {update && <Edititemmodal 
      setUpdate={setUpdate}
       seteditdata={seteditdata}
        editdata={editdata} />}
        {confirm&& <ConfirmMessage text="Are you sure you want to delete"
         Confirmcall={Removemsterapi}
         onCancel={onCancel}
         />}
       {showmessage && <Message show={showmessage} setshowmessage={setshowmessage} />} 
    </div>
  );
      }

export default AgGridTable;
