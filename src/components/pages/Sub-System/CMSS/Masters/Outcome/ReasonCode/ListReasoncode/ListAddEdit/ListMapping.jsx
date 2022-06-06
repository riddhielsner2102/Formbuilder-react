import React, { useEffect, useState } from 'react'
import { AgGrid, Button, CheckBox, Input, Label } from 'arms_v2.8_webui'
import { Col, Container, Row } from 'react-bootstrap'
import "./ListMapping.css"
import { PrepareRequest, requests } from '../../../../../../../../../Service/getRequests'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

const ListMapping = (props) => {
    console.log('mapping', props.data)
    const [ReasonCodeID, setReasonCodeID] = useState(null)
    useEffect(() => {
        setReasonCodeID(props?.data?.ReasonCodeID)
    }, [])

    const [dataL, setDataL] = useState([])
    const [dataR, setDataR] = useState([])

    useEffect(async () => {
        const AppID = sessionStorage.getItem('SubsystemID')
        const URL = `${requests.getMasterReasonCodeOptions}?ReasonCodeID=${ReasonCodeID}&AppID=13`
        const response = await PrepareRequest(URL);
        console.log('response', response.data)
        setDataL(response.data.lstModelGeneralItemRepository)
        setDataR(response.data.lstModelMasterReasonCodeOption)
    }, [ReasonCodeID])

    const frameworkComponents = {
        checkbox: CheckBox,
    };

    const [checked, setChecked] = useState([]);
    const leftChecked = intersection(checked, dataL);
    const rightChecked = intersection(checked, dataR);

    const [selectedLeftValue, setSelectedLeftValue] = useState({})
    const [selectedRightValue, setSelectedRightValue] = useState({})

    const fetchData = (value) => {
        const currentIndex = checked.indexOf(value.data);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value.data);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }

    const LeftData = (value) => {
        console.log('leftClick', value.data)
        setSelectedLeftValue(value.data)
        fetchData(value)
    }
    const RightData = (value) => {
        console.log('rightClick', value.data)
        setSelectedRightValue(value.data)
        fetchData(value)
    }

    const forwaradData = () => {
        setDataR(dataR.concat({
            BehavioralIndicator: selectedLeftValue.RepTitle,
            Description: selectedLeftValue.RepTitle,
            OptionCode: selectedLeftValue.RepTitle,
            OptionTitle: selectedLeftValue.RepTitle,
            ReasonCodeID: ReasonCodeID,
            ReasonCodeOptionID: 0,
            // ReasonCodeTitle: null,
            RepID: null,
            // ID: dataR.length + 1
        }));
        // setDataL(not(dataL, leftChecked));
        setDataL(dataL);
        setChecked(not(checked, leftChecked));
    }

    const backwardData = () => {
        setDataL(dataL.concat({
            ID: 0,
            RepTitle: selectedRightValue.OptionTitle
        }));
        setDataR(not(dataR, rightChecked));
        setChecked(not(checked, rightChecked));
    }

    const columnsDataL = [
        {
            headerName: "Select",
            field: "",
            width: 100,
            style: {
                background: "white !important",
                color: "black !important",
            },
            cellRenderer: "checkbox",
            cellRendererParams: {
                iconType: "tick",
            },
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
            },
        },

        {
            headerName: "Items",
            field: "RepTitle",
            cellStyle: {
                height: "100%",
                fontSize: "14px",
                overflow: "hidden",
                wordWrap: "break-word",
                textOverflow: "ellipsis",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
            },
        },
    ];

    const columnsDataR = [
        {
            headerName: "Select",
            field: "checkbox",
            cellRenderer: "checkbox",
            cellRendererParams: { iconType: "tick" },
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
            },
        },
        {
            headerName: "OptionTitle",
            field: "OptionTitle",
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
            },
        },
        {
            headerName: "OptionCode",
            field: "OptionCode",
            editable: true,
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
                backgroundColor: "lightgoldenrodyellow",
                border: "1px solid brown",
            },
        },
        {
            headerName: "Description",
            field: "Description",
            editable: true,
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
                backgroundColor: "lightgoldenrodyellow",
                border: "1px solid brown",
            },
        },
        {
            headerName: "BehavioralIndicator",
            field: "BehavioralIndicator",
            cellStyle: {
                height: "100%",
                display: "flex ",
                justifyContent: "start",
                alignItems: "center",
                backgroundColor: "lightgoldenrodyellow",
                border: "1px solid brown",
                fontSize: "14px"
            },
        },
    ]

    return (
        <Container
            style={{
                width: '100%',
                textAlign: 'left'
            }}
        >
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Col
                    style={{
                        width: '26%',
                        border: "1px solid grey",
                        marginRight: '32px',
                        padding: '0 16px 16px 0'
                    }}
                >
                    <Row
                        style={{
                            margin: '3px'
                        }}
                    >
                        <Col
                            xs={12}
                        >
                            <Label
                                text="Filter"
                                style={{
                                    display: "flex",
                                    opacity: "1",
                                    letterSpacing: "0px",
                                    color: "black",
                                    paddingRight: "28px",
                                    fontSize: "12px !important",
                                }}
                            />
                            <Input
                                style={{
                                    width: "100%",
                                    borderBottom: "1px solid black"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="ListMapping_Table">
                            <AgGrid
                                onCellClicked={LeftData}
                                rowData={dataL}
                                columnData={columnsDataL}
                                headerHeight={50}
                                frameworkComponents={frameworkComponents}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    marginTop: "20px",
                                    border: "none",
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col
                    style={{
                        width: '10%'
                    }}
                >
                    <Row
                        style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: '100%'
                        }}
                    >
                        <Col>
                            <Button
                                text={<ArrowForwardIcon />}
                                style={{
                                    backgroundColor: "#01396b !important",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    boxSizing: "border-box",
                                    boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                                }}
                                onClick={forwaradData}
                            />
                        </Col>
                        <Col>
                            <Button
                                text={<ArrowBackIcon />}
                                style={{
                                    backgroundColor: "#01396b !important",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    boxSizing: "border-box",
                                    boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                                }}
                                onClick={backwardData}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col
                    style={{
                        width: '55%',
                        border: "1px solid grey",
                        marginRight: '32px',
                        padding: '0 16px 16px 0'
                    }}
                >
                    <Row
                        style={{
                            margin: '3px'
                        }}
                    >
                        <Col
                            xs={12}
                        >
                            <Label
                                text="Filter"
                                style={{
                                    display: "flex",
                                    opacity: "1",
                                    letterSpacing: "0px",
                                    color: "black",
                                    paddingRight: "28px",
                                    fontSize: "12px !important",
                                }}
                            />
                            <Input
                                style={{
                                    width: "100%",
                                    borderBottom: "1px solid black"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="ListMapping_Table">
                            <AgGrid
                                onCellClicked={RightData}
                                rowData={dataR}
                                columnData={columnsDataR}
                                headerHeight={50}
                                frameworkComponents={frameworkComponents}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    marginTop: "20px",
                                    border: "none",
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

export default ListMapping