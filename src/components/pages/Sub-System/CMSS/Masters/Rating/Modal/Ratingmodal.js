import React, { useState } from "react";
import classes from "./Ratingmodal.module.css";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import AddIcon from "@mui/icons-material/Add";
import {
    postapis,
    PostRequest,
} from "../../../../../../../Service/postRequests";
// import Aux from "../../../../../../../components/common/";
import { Container, Row, Col } from "react-bootstrap";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Input, Button, Close, CheckBox, ComboBox,TextArea } from "arms_v2.8_webui";
import { getSessionStorage } from "../../../../../../common/sessionStorage";

function Ratingmodal(props) {
    const userId = getSessionStorage("UserID")
    const SubsystemID = getSessionStorage("SubsystemID")
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [repeatederror, setrepeatederror] = useState(false);
    const formValues={ SubsystemID: 13, AssesmentTypeID: 0, AssessmentType: title, Description: desc,UserID:userId} ;
    const handletitle = (e) => {
       settitle(e.target.value)
    };
    const handledesc = (e) => {
        setdesc(e.target.value)
     };


    const handleSubmit = async() => {
        const URL = `${postapis.postMasterAssessment}`;
        const response =await PostRequest(URL, formValues);
        props.SetModal2({ show: false })
        props.setdisable(true)
        props.setclosed(true)
    };


    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opcaity: props.show ? "1" : "0",
                    minWidth: "500px",
                    // height: "400px",
                    minHeight: "250px",
                    maxHeight: "400px",
                    overflow: "scroll",
                }}
            >
                <Container>
                    <Row
                        style={{
                            backgroundColor: "#01396b",
                            color: "white",
                            height: "64px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "15px",
                            marginTop: "10px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "space-around" }}>
                            <h3
                                style={{
                                    color: "#fff",
                                    textAlign: "left",
                                    letterSpacing: 0,
                                    marginTop: "2px",
                                    // fontSize: "20px",
                                }}
                            >
                                Rating
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
                    <div>
                    <Input
              value={title}
              onChange={(e) =>
                handletitle(e)
              }
              placeholder="TemplateName *"
              style={{
                width: "395px",
                height: "48px",
                border: "1px solid #000",
                alignItems: "center",
                marginTop: "20px",
                textAlign: "left",
                fontSize:"20px",
                fontWeight:"600"
              }}
            />
            <Input
              value={desc}
              onChange={(e) =>
                handledesc(e)
              }
            placeholder="TemplateName"
              style={{
                width: "395px",
                height: "48px",
                border: "1px solid #000",
                alignItems: "center",
                marginTop: "10px",
                textAlign: "left",
                fontSize:"20px",
                fontWeight:"600"
              }}
            />
                    </div>
                </Container>
                <Button
                    text="Save"
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: "#01396b !important",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        verticalAlign: "baseline",
                        textAlign: "center",
                        marginTop: "20px",
                        marginLeft: "370px",
                        // margin: 0,
                        minWidth: "64px",
                        lineHeight: "40px",
                        height: "40px",
                        padding: "0 20px",
                        borderRadius: "4px",    
                        overflow: "visible",
                    }}
                />
            </div>
        </>
    );
}

export default Ratingmodal;
