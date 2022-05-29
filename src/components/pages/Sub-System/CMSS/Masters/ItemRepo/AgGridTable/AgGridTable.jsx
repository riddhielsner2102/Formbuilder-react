import React,{useEffect,useState} from "react";
import "./AgGridTable.css";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";
import ActionButtonModal from "../AgGridTable/ActionButtonModal";
import { getSessionStorage } from "../../../../../../common/sessionStorage";

function AgGridTable() {
  const [data, setdata] = useState([])
  useEffect(async () => {
    const UserID = getSessionStorage('UserID')
    const URL = `${requests.getMasterItemRepository}?UserID=1&AppID=13`
    const response = await PrepareRequest(URL);
    console.log('response', response.data)
    setdata(response.data.lstModelItemRepository)
  }, [])
  useEffect(() => {
    console.log('data', data)
  }, [data])

  const [showAction, setShowAction] = useState(false)
  const showNewModal = (data) => {
    console.log('action clicked',data)
    setShowAction(!showAction)
  }
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

  return (
    <div className="itemrepo-table">
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
            {showAction && <ActionButtonModal />}
    </div>
  );
}

export default AgGridTable;
