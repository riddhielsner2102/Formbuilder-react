import React, { useEffect, useState } from "react";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../../Service/getRequests";
import './ListReasonCode.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ListReasonCode = () => {
    const [data, setdata] = useState([])
    useEffect(async () => {
        const URL = `${requests.getMasterReasonCodeOptions}?ReasonCodeID=83&AppID=13`
        const response = await PrepareRequest(URL);
        console.log('response', response.data)
        setdata(response.data.lstModelMasterReasonCodeOption)
    }, [])
    useEffect(() => {
        console.log('data', data)
    }, [data])

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
            headerName: "Option Title",
            field: "OptionTitle",
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
            headerName: "Option Code",
            field: "OptionCode",
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
            headerName: "Description",
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
            headerName: "Behavioral Indicator",
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
                text: <DeleteOutlineIcon />,
                style: {
                    width: "80px",
                    height: "40px",
                    backgroundColor: "transparent !important",
                    color: 'black'
                },
                // onClick: () => showNewModal(),
            },
            cellStyle: {
                color: "black",
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
        <div className="listReasonCode-table">
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
        </div>
    )
}

export default ListReasonCode