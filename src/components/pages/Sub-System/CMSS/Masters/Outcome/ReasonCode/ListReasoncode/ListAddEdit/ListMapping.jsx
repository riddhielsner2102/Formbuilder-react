import React, { useEffect, useState } from 'react'
import { AgGrid, Button, CheckBox, Input, Label } from 'arms_v2.8_webui'
import { Col, Container, Row } from 'react-bootstrap'
import "./ListMapping.css"
import { PrepareRequest, requests } from '../../../../../../../../../Service/getRequests'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ListMapping = () => {
    const [dataL, setDataL] = useState([])
    const [dataR, setDataR] = useState([])

    useEffect(async () => {
        const AppID = sessionStorage.getItem('SubsystemID')
        const URL = `${requests.getMasterReasonCodeOptions}?ReasonCodeID=83&AppID=13`
        const response = await PrepareRequest(URL);
        setDataL(response.data.lstModelGeneralItemRepository)
        setDataR(response.data.lstModelMasterReasonCodeOption)
    }, [])

    const frameworkComponents = {
        checkbox: CheckBox,
    };

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
                                rowData={dataL}
                                columnData={columnsDataL}
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