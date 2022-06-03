import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";
// import Edititemmodal from "../Modal/Edititemmodal"
import { getSessionStorage } from "../../../../../../common/sessionStorage";
import ActionButtonmodal from "./ActionButtonmodal";
function AgGridTable(props) {
    const [data, setdata] = useState([])
    const UserID = getSessionStorage("UserID")
    const URL = `${requests.getMasterAssessment}?UserID=${UserID}&AppID=13`

    useEffect(async () => {
        const response = await PrepareRequest(URL);
        setdata(response.data)
    }, [])
    useEffect(async()=>{
        if(props.closed){
          const response = await PrepareRequest(URL);
          setdata(response.data)
          props.setdisable(false)
          props.setclosed(false)
        //   setshowmessage(true)
        }
  },[props.closed])
    const frameworkComponents = {
        gridButton: Button,
    };
    const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("Action Modal");
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
            headerName: "Rating",
            field: "AssessmentType",
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
            headerName: "Created By",
            field: "UserName",
            width: 100,
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
            headerName: "Created On",
            field: "CreatedOn",
            width: 100,
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
    const [editdata, seteditdata] = useState()
    const [edit, setedit] = useState(false)
    console.log(editdata, "editdata");
    const someHandler = (e) => {
        seteditdata(e.data)
        setedit(true)
        console.log(e.data, "hiii");
    }


    return (
        <div className="itemrepo-table">
            <ActionButtonmodal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
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
            {/* {edit && <Edititemmodal
                setedit={setedit}
                seteditdata={seteditdata}
                editdata={editdata}
                setdata={setdata}
            />} */}
        </div>
    );
}

export default AgGridTable;
