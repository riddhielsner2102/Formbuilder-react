import React from 'react'
import { Button, Close, Input } from 'arms_v2.8_webui'
import { Col, Container, Row } from 'react-bootstrap'
import "./ListAddEdit.css"
import Backdrop from "../../../../../../../../ReusableComp/Backdrop"
import ListMapping from './ListMapping'
import { postapis, PostRequest } from '../../../../../../../../../Service/postRequests'

const ListAddEdit = (props) => {
    console.log('props.data', props.data)
    // postMasterReasonCodeOptions
    const dataObject = {
        BehavioralIndicator: "SPA",
        Description: "SPA",
        OptionCode: "SPA",
        OptionTitle: "SPA",
        ReasonCodeID: "146",
        ReasonCodeOptionID: 0,
        RepID: 29
    }
    const SaveAddEditData = () => {
        const URL = `${postapis.postMasterReasonCodeOptions}`
        PostRequest(URL, dataObject);
    }

    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className='ListAddEditModal'
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opcaity: props.show ? "1" : "0",
                    minWidth: "80vw",
                }}
            >
                <Container
                    className='ListAddEditdivDow'
                    style={{
                        padding: "0px",
                        margin: "0px",
                        width: '100%'
                    }}
                >
                    <Row
                        style={{
                            padding: "0px",
                            margin: "0px",
                            width: "100%",
                            backgroundColor: "#01396b",
                            color: "white",
                            height: "64px",
                            padding: "0 16px",
                            boxSizing: "none",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <h3
                                style={{
                                    color: "#fff",
                                    textAlign: "left",
                                    letterSpacing: 0,
                                    fontWeight: 400,
                                    fontSize: "20px",
                                }}
                            >
                                Add&nbsp;Items
                            </h3>
                            <Close
                                onClick={props.modalClosed}
                                style={{
                                    transform: props.show
                                        ? "translateY(0)"
                                        : "translateY(-100vh)",
                                    opcaity: props.show ? "1" : "0",
                                    color: "#fff",
                                    fontWeight: 800,
                                    marginTop: "2px",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                    </Row>
                    <Row
                        style={{
                            width: '100%',
                            padding: '16px'
                        }}
                    >
                        <ListMapping data={props?.data[0]} />
                    </Row>
                    <Row>
                        <Col
                            style={{
                                padding: "16px",
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >
                            <Button
                                text="Save"
                                onClick={SaveAddEditData}
                                style={{
                                    backgroundColor: "#01396b !important",
                                    color: "#fff",
                                    display: "inline-block",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    textAlign: "center",
                                    margin: 0,
                                    minWidth: "64px",
                                    lineHeight: "40px",
                                    height: "40px",
                                    padding: "0 20px",
                                    borderRadius: "4px",
                                    overflow: "visible",
                                }}
                            />
                        </Col>
                    </Row>
                </Container >
            </div >
        </>
    )
}

export default ListAddEdit