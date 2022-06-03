import React, { useEffect, useState } from "react";
import "./AgGridTable.css";
import Message from "../../../../../../ReusableComp/Message/Message";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../Service/getRequests";
import Edititemmodal from "../Modal/Edititemmodal"
import { getSessionStorage } from "../../../../../../common/sessionStorage";
function AgGridTable(props) {
    const [data, setdata] = useState([])
    console.log(data, "data");
    const [showmessage, setshowmessage] = useState(false)

    const UserID = getSessionStorage("UserID")
    const URL = `${requests.getMasterFields}?UserID=${UserID}&AppID=13`

    useEffect(async () => {
        const response = await PrepareRequest(URL);
        setdata(response.data.lstMasterFields)
    }, [])
    useEffect(async () => {
        if (props.closed) {
            const response = await PrepareRequest(URL);
            setdata(response.data.lstMasterFields)
            props.setclosed(false)
        }
    }, [props.closed])

    // const closeNewModal = () => {
    //     SetModal2({ show: false });
    // };
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
                // onClick: showNewModal,
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
            {edit && <Edititemmodal
                setedit={setedit}
                seteditdata={seteditdata}
                editdata={editdata}
                setdata={setdata}
            />}
        </div>
    );
}

export default AgGridTable;
