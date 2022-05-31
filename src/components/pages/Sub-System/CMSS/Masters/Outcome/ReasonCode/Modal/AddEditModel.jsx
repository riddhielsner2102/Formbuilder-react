import React, { useEffect, useState } from "react";
import classes from "./AddEditModel.module.css";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Close } from "arms_v2.8_webui";
import { PostRequest, postapis } from "../../../../../../../../Service/postRequests";

function AddEditModel(props) {
  const UserID = sessionStorage.getItem('UserID')
  const AppID = sessionStorage.getItem('AppID')

  const [dataObject, setDataObject] = useState({ ReasonCodeTitle: "", UserID: UserID, AppID: 13, ReasonCodeID: 131 })
  const InputChange = (e) => {
    setDataObject({ ...dataObject, [e.target.name]: e.target.value })
  }

  const SaveData = () => {
    console.log('dataObject', dataObject)
    const URL = `${postapis.postMasterReasonCode}`
    PostRequest(URL, dataObject);
    props.modalClosed()
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opcaity: props.show ? "1" : "0",
          minWidth: "35%",
        }}
      >
        <Container
          className={[classes.divDow].join(" ")}
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
                Reason&nbsp;Code
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
          <Row>
            <Col xs={12}>
              <Row style={{ padding: "16px" }}>
                <Col xs={12} style={{ margin: "4px 0" }}>
                  <Input
                    placeHolder="Title *"
                    style={{
                      width: "100%",
                      height: "64px",
                      border: "1px solid lightgray",
                      textAlign: "left",
                      fontSize: "14px",
                      padding: "0 12px",
                      borderRadius: "12px",
                    }}
                    onChange={InputChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                padding: "16px",
                display: "flex",
                justifyContent: "end",
              }} >
              <Button
                text="Save"
                onClick={SaveData}
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

export default AddEditModel;
