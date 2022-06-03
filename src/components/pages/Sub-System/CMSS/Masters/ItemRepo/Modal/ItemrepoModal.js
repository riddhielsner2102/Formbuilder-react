import React, { useState } from "react";
import classes from "./Template.module.css";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import AddIcon from "@mui/icons-material/Add";
import {
    postapis,
    PostRequest,
} from "../../../../../../../Service/postRequests";
// import Aux from "../../../../../../../components/common/";
import { Container, Row, Col } from "react-bootstrap";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Input, Button, Close, CheckBox, ComboBox } from "arms_v2.8_webui";
import { getSessionStorage } from "../../../../../../common/sessionStorage";

function Itemmodal(props) {
    const userId = getSessionStorage("UserID")
    const SubsystemID = getSessionStorage("SubsystemID")
    const [Check, setcheck] = useState(true);
    const [error, seterror] = useState(false);
    const [repeatederror, setrepeatederror] = useState(false);
    const [formValues, setFormValues] = useState([{ RepID: 0, RepTitle: "", IsActive: Check, createdBy: userId }]);
    let addFormFields = (i, x) => {
        console.log(x !== "" && formValues, "good");
        const b = formValues.slice(0, formValues.length - 1);
        const a = b.find((item) => item.RepTitle === x);
        if (formValues[i].RepTitle === "") {
            seterror(true);
        } else if (a) {
            setrepeatederror(true);
        } else {
            setFormValues([...formValues, { RepTitle: "", IsActive: Check }]);
        }
    };
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        if (formValues[i].RepTitle !== "") {
            seterror(false);
            setrepeatederror(false);
            setFormValues(newFormValues);
        }
    };
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        seterror(false);
        setFormValues(newFormValues);

    };
    const handleCheck = (i, e) => {
        console.log(i, e, "hhhhhh");
        let newFormValues = [...formValues];
        newFormValues[i].IsActive = setcheck(!Check);
        setFormValues(newFormValues);
    };
    const handleSubmit = (event) => {
        const a = formValues.filter((e) => e.RepTitle === "");
        console.log(a, "a");
        if (a.length) {
            seterror(true);
        } else {
            const URL = `${postapis.PostMasterMultipleItemRepository}`;
            const x = { lstModelItemRepository: formValues, AppId: SubsystemID }
            PostRequest(URL, x);
            props.SetModal2(false)
            props.setdisable(true)
            props.setclosed(true)
            setFormValues([{ RepID: 0, RepTitle: "", IsActive: Check, createdBy: userId }])

        }
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
                                Template
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
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginRight: "10px",
                            marginTop: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                    >
                        <Col
                            style={{
                                borderRight: "1px solid black",
                                textAlign: "start",
                                fontWeight: "bold",
                                width: "50%",
                            }}
                        >
                            Title
                        </Col>
                        <Col
                            style={{
                                borderRight: "1px solid black",
                                width: "20%",
                                fontWeight: "bold",
                            }}
                        >
                            Is Active
                        </Col>
                        <Col style={{ width: "30%", fontWeight: "bold" }}>Actions</Col>
                    </Row>
                    {formValues.map((element, index) => {
                        return (
                            <>
                                <Row
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                >
                                    <Col
                                        style={{
                                            border: "1px solid black",
                                            textAlign: "center",
                                            backgroundColor: "lightyellow",
                                            width: "50%",
                                            height: "40px",
                                        }}
                                    >
                                        <Input
                                            placeholder="TemplateName *"
                                            value={element.RepTitle || ""}
                                            name="RepTitle"
                                            disabled={index === formValues.length - 1 ? false : true}
                                            onChange={(e) => handleChange(index, e)}
                                            style={{
                                                width: "90%",
                                                height: "32px",
                                                alignItems: "center",
                                                marginLeft: "-22px",
                                                textAlign: "left",
                                                backgroundColor: "lightyellow",
                                            }}
                                        />
                                    </Col>
                                    <Col
                                        style={{
                                            border: "1px solid black",
                                            textAlign: "center",
                                            width: "20%",
                                            height: "40px",
                                        }}
                                    >
                                        <CheckBox
                                            checkwidth="140%"
                                            onChange={(e) => handleCheck(index, e)}
                                            iconType="tick"
                                            checked={formValues[index].IsActive}
                                            iconColor="#0F243E"
                                            name="check"
                                            colorIcon="White"
                                            style={{
                                                padding: "0px",
                                                borderRadius: "1px",
                                                marginTop: "12px",
                                                marginLeft: "20px",
                                            }}
                                        />
                                    </Col>
                                    <Col
                                        style={{
                                            border: "1px solid black",
                                            textAlign: "left",
                                            width: "30%",
                                            height: "40px",
                                        }}
                                    >
                                        <div>
                                            {index === formValues.length - 1 && (
                                                <span
                                                    role="button"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "30px",
                                                        paddingLeft: "10px",
                                                    }}
                                                    onClick={() =>
                                                        addFormFields(index, formValues[index].name)
                                                    }
                                                >
                                                    <AddIcon />
                                                </span>
                                            )}
                                            {formValues.length !== 1 && (
                                                <span
                                                    role="button"
                                                    style={{
                                                        cursor: "pointer",
                                                        fontSize: "30px",
                                                        paddingLeft: "10px",
                                                    }}
                                                    onClick={() => removeFormFields(index)}
                                                >
                                                    <DeleteOutlineIcon />
                                                </span>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        );
                    })}

                    {error ? (
                        <p
                            style={{
                                color: "red",
                                textAlign: "left",
                                margin: "5px",
                                fontSize: "14px",
                            }}
                        >
                            Please Enter A title
                        </p>
                    ) : (
                        ""
                    )}
                    {repeatederror ? (
                        <p
                            style={{
                                color: "red",
                                textAlign: "left",
                                margin: "5px",
                                fontSize: "14px",
                            }}
                        >
                            Item Title already exists
                        </p>
                    ) : (
                        ""
                    )}
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

export default Itemmodal;
