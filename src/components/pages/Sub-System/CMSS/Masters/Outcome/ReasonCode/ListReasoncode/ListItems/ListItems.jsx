import React, { useEffect, useState } from "react";
import { Button, AgGrid } from "arms_v2.8_webui";
import { PrepareRequest, requests } from "../../../../../../../../../Service/getRequests";
import './ListItems.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ConfirmMessage from "../../../../../../../../ReusableComp/Message/ConfirmMessage";
import Message from "../../../../../../../../ReusableComp/Message/Message";

const ListItems = (props) => {
    const [ReasonCodeID, setReasonCodeID] = useState(null)
    useEffect(() => {
        setReasonCodeID(props?.data[0].ReasonCodeID)
    }, [])

    const [listData, setListData] = useState([])
    const getAllListItemData = async () => {
        const URL = `${requests.getMasterReasonCodeOptions}?ReasonCodeID=${ReasonCodeID}&AppID=13`
        const response = await PrepareRequest(URL);
        setListData(response.data.lstModelMasterReasonCodeOption)
    }
    useEffect(() => {
        getAllListItemData()
    }, [ReasonCodeID])

    const [showConfirm, setShowConfirm] = useState(false)
    const [ReasonCodeOptionID, setReasonCodeOptionID] = useState(null)
    const [showMessage, setShowMessage] = useState(false)

    const showNewModal = async (value) => {
        setReasonCodeOptionID(value.data.ReasonCodeOptionID)
        const URL = `${requests.validateMasterReasonCode}?ReasonCodeID=${ReasonCodeID}`
        const response = await PrepareRequest(URL);
        console.log('deleteModel', response.data)
        setShowConfirm(true)
    }
    const ConfirmDeleteList = async () => {
        const URL = `${requests.removeMasterReasonCodeOption}?ReasonCodeOptionID=${ReasonCodeOptionID}`
        const response = await PrepareRequest(URL);
        console.log('deleteConfirm', response.data)
        getAllListItemData()
        setShowConfirm(false)
        if (response.data === 1) {
            setShowMessage(true)
        }
    }
    const deleteModelClose = () => setShowConfirm(false)
    const handleClose = () => setShowMessage(false)

    const frameworkComponents = {
        gridButton: Button,
    };

    const contentData = [
        {
            headerName: "ID",
            field: "ID",
            cellStyle: {
                height: "100%",
                width: '120px',
                display: "flex",
                justifyContent: "start",
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
                width: '227px',
                display: "flex",
                justifyContent: "start",
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
                width: '155px',
                display: "flex",
                justifyContent: "start",
                alignItems: "center ",
                fontSize: "15px",
                paddingTop: "6px",
                paddingBottom: "8px",
            },
        },
        {
            headerName: "Description",
            field: "Description",
            cellStyle: {
                color: "#000",
                height: "100%",
                width: '227px',
                display: "flex",
                justifyContent: "start",
                alignItems: "center ",
                fontSize: "15px",
            },
        },
        {
            headerName: "Behavioral Indicator",
            field: "BehavioralIndicator",
            cellStyle: {
                color: "#000",
                height: "100%",
                width: '250px',
                display: "flex ",
                justifyContent: "start",
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
                    // width: "80px",
                    height: "40px",
                    backgroundColor: "transparent !important",
                    color: 'rgba(0,0,0,0.87)'
                },
                // onClick: (e) => showNewModal(e),
            },
            cellStyle: {
                color: "black",
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center ",
                fontSize: "20px",
                // paddingTop: "5px",
                // paddingBottom: "5px",
            },
        },
    ];

    return (
        <div className="ListItems-table">
            <AgGrid
                onCellClicked={showNewModal}
                rowData={listData}
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
            {showConfirm &&
                <ConfirmMessage
                    text='Are you sure you want to delete?'
                    flag={showConfirm}
                    onCancel={() => deleteModelClose()}
                    onConfirm={() => ConfirmDeleteList()}
                />
            }
            {showMessage &&
                <Message
                    flag={showMessage}
                    text="Reason Code Option Deleted"
                    handleClose={handleClose}
                />
            }
        </div>
    )
}

export default ListItems