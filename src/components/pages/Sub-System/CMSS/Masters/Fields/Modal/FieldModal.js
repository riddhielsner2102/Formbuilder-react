

import React, { useState, useEffect } from "react";
import classes from "./Field.module.css";
import { Container, Row } from "react-bootstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Input, Close, ComboBox, CheckBox } from "arms_v2.8_webui";
import {
    postapis,
    PostRequest,
} from "../../../../../../../Service/postRequests";
import { Button, Label } from "arms_v2.8_webui";
// import Aux from "../../pages/Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import IconButton from "@mui/material/IconButton";
import { getSessionStorage } from "../../../../../../common/sessionStorage";


function FieldModal(props) {
const[title,settitle]=useState()
console.log(title,"title");
const[IsActive,setIsActive]=useState(true)
const formValues = { AppID: 13, FieldId: 0, FieldName: title, IsActive:IsActive?1:false}

const handlechange=(e)=>{
settitle(e.target.value)
}
const handlecheck=()=>{
    setIsActive(!IsActive)
}
const handleClose = () => {
        const URL = `${postapis.saveMasterField}`;
        PostRequest(URL, formValues);
        props.setclosed(true)
        // props.SetModal2({})
        props.modalClosed()
        
      }
    const btndisabled = (props) => {
            if(title===""){
                return true
            }else{
                return false
            }
    }


    return (
        <>
            <Backdrop
                show={props.show}
                clicked={props.handleClose}
            />
            <Container
                className={classes.Mod}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opcaity: props.show ? "1" : "0",
                    minWidth: "500px",
                    height: "300px",
                    // maxHeight: "400px",
                    // overflow: "scroll",
                }}
            >
                <div
                    className={[classes.divDow].join(" ")}
                    style={{
                        height: "300px",
                        // padding: "10px",
                        margin: "0px",
                        width: "100%",
                        maxWidth: "80vw",
                    }}
                >
                    <Row
                        style={{
                            backgroundColor: "#01396b",
                            color: "white",
                            height: "64px",
                            display: "flex",
                            padding: "15px",
                            marginTop: "20px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h3
                                style={{
                                    color: "#fff",
                                    textAlign: "left",
                                    letterSpacing: 0,
                                    height: "100%",
                                    font: "497 18px/32px Muli, Helvetica Neue, Arial, sans-serif",
                                }}
                            >
                                Message
                            </h3>
                            <Close
                                onClick={props.modalClosed}
                                style={{
                                    transform: props.show
                                        ? "translateY(0)"
                                        : "translateY(-100vh)",
                                    opcaity: props.show ? "1" : "0",
                                    marginLeft: "320px",
                                    fontWeight: "bolder",
                                    marginTop: "2px",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                    </Row>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "space-around",
                            padding: "20px",
                        }}
                    >
                        <Input
                              value={title}
                              onChange={(e) =>
                                handlechange(e)
                              }
                            placeholder="TemplateName *"
                            style={{
                                width: "395px",
                                height: "48px",
                                border: "1px solid #000",
                                alignItems: "center",
                                marginLeft: "0px",
                                textAlign: "left",
                                fontSize:"20px",
                                fontWeight:"600"
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}>
                        <CheckBox
                            checkwidth="140%"
                              onClick={() => handlecheck()}
                            iconType="tick"
                              checked={IsActive}
                            iconColor="#0F243E"
                            name="check"
                            colorIcon="White"
                            style={{
                                padding: "0px",
                                borderRadius: "1px",
                                marginLeft: "43px"
                            }}
                        />
                        <Label
                            text="Is Active"
                            style={{
                                fontFamily: "Muli, Helvetica, Neue Arial ,sansSerif",
                                color: "black",
                                // textAlign: "left",
                                letterSpacing: 0,
                                marginTop: "2px",
                                fontSize: "18px",
                            }}
                        />
                    </div>
                    <Button
                        text="Save"
                        disabled={btndisabled()}
                        // onClick={props.modalClosed}
                        onClick={() => handleClose()}
                        style={{
                            backgroundColor: "#01396b !important",
                            color: "#fff",
                            whiteSpace: "nowrap",
                            textDecoration: "none",
                            verticalAlign: "baseline",
                            textAlign: "right",
                            marginLeft: "300px",
                            // minWidth: "64px",
                            // lineHeight: "40px",
                            height: "40px",
                            width: "65px",
                            padding: "0 20px",
                            borderRadius: "4px",
                            overflow: "visible",
                        }}
                    />
                </div>
            </Container>
        </>
    );
}

export default FieldModal;
