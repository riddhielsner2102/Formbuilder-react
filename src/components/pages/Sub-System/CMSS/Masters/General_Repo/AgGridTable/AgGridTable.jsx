import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid, CheckBox } from "arms_v2.8_webui";
import {
  PrepareRequest,
  requests,
} from "../../../../../../../Service/getRequests";

function AgGridTable(props) {
  const [data, setdata] = useState([]);

  useEffect(async () => {
    const UserID = sessionStorage.getItem("UserID");
    const URL = `${requests.getMasterGeneralRepository}?UserID=${UserID}&AppID=13`;
    const response = await PrepareRequest(URL);
    console.log("response", response.data.lstModelGeneralItemRepository);
    setdata(response.data.lstModelGeneralItemRepository);
  }, []);

  const [showAction, setShowAction] = useState(false);
  const showNewModal = () => {
    console.log("action clicked");
    setShowAction(!showAction);
  };
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };

  const frameworkComponents = {
    gridButton: Button,
    gridCheck: CheckBox,
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
        textAlign: "left",
        overflow: "hidden",
        wordWrap: "break-word",
        textOverflow: "ellipsis",
        fontSize: "15px",
        paddingTop: "6px",
        paddingBottom: "8px",
      },
    },
    {
      headerName: "Is Active",
      // field: "True",
      cellRenderer: "gridCheck",
      cellRendererParams: { iconType: "True" },
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
      headerName: "Type",
      field: "ItemType",
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
      headerName: "Created By",
      field: "UserName",
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
  const [edit, setedit] = useState(false);
  const [editdata, seteditdata] = useState([]);
  const someHandler = (e) => {
    setedit(true);
    seteditdata(e.data);
    console.log(e.data, "index");
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
      {edit && (
        <Message
          setedit={setedit}
          seteditdata={seteditdata}
          editdata={editdata}
        />
      )}
      {/* {edit && <Message setshowmessage={setshowmessage} setedit={setedit} />} */}
    </div>
  );
}

export default AgGridTable;
