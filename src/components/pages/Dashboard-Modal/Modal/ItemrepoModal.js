import React, { useState } from "react";
import classes from "./Template.module.css";
import Backdrop from "../components/Backdrop";
import Aux from "../hoc/Auxiliary/Auxiliary";
import { Container, Row, Col, Table } from "react-bootstrap";
import { TemplateData } from "./TemplateData";
import { TemplateData2 } from "./TemplateData2";
import { Input, Button, Close, CheckBox, ComboBox } from "arms_v2.8_webui";

function Itemmodal(props) {
    // shouldComponentUpdate(nextProps, nextState) {
    //   return (
    //     nextProps.show !== props.show ||
    //     nextProps.children !== props.children
    //   );
    // }
    // constructor(props) {
    //   super(props);
    //   state = { value: "" };
    // }

    // updateValue = (e) => {
    //   setState({ value: e.target.value });
    // };
    const [Check, setcheck] = useState(true)
    const [error, seterror] = useState(false)
    const [formValues, setFormValues] = useState([{ name: "", check: Check }])
    let addFormFields = (i) => {
        if (formValues[i].name === "" ) {
            seterror(true)
        } else {
            // console.log(newFormValues.disable=true,"new");
            // newFormValues[i-1].disable=!disable
            setFormValues([...formValues, { name: "", check: Check }])
        }
    }
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        if (formValues[i].name !== "") {
            seterror(false)
            setFormValues(newFormValues);
        }
    }
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        // if(formValues[i+1].name===""){
        seterror(false)
        setFormValues(newFormValues)
        // }
        // seterror(true)


    }

    const handleSubmit = (event) => {
        const a = formValues.filter((e) => e.name === "")
        // console.log(JSON.stringify(formValues,"Itemdata"));
        console.log(a, "a");
        if (a.length) {
            seterror(true)
        }else{
            props.SetItemdata(JSON.stringify(formValues))

        }
    }
    const handleCheck = (i, e) => {
        console.log(i, e, "hhhhhh");
        let newFormValues = [...formValues];
        // setcheck(!Check)
        newFormValues[i].check = setcheck(!Check);
        setFormValues(newFormValues);
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opcaity: props.show ? "1" : "0",
                    minWidth: "500px",
                    // height: "400px",
                    minHeight:"250px",
                    maxHeight:"400px",
                    overflow: "scroll"
                }}
            >
                <Container >
                    <Row
                        style={{
                            backgroundColor: "#0F243E",
                            color: "white",
                            height: "30px",
                            display: "flex",
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
                    <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "10px", marginRight: "10px", marginTop: "10px", border: "1px solid black", padding: "10px" }}>
                        <Col style={{ borderRight: "1px solid black", textAlign: "start", width: "50%" }}>Title</Col>
                        <Col style={{ borderRight: "1px solid black", width: "20%" }}>Is Active</Col>
                        <Col style={{ border: "0px solid black", width: "30%" }}>Actions</Col>
                    </Row>
                    {formValues.map((element, index) => {
                        return (
                            <>
                                <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "10px", marginRight: "10px" }}>
                                    <Col style={{ border: "1px solid black", textAlign: "center", backgroundColor: "lightyellow", width: "50%", height: "40px" }}><Input
                                        placeholder="TemplateName *"
                                        value={element.name || ""}
                                        name="name"
                                        disabled={index === formValues.length - 1 ? false : true}
                                        onChange={e => handleChange(index, e)}
                                        style={{
                                            width: "90%",
                                            height: "32px",
                                            alignItems: "center",
                                            marginLeft: "-22px",
                                            textAlign: "left",
                                            backgroundColor: "lightyellow"
                                        }}
                                    /></Col>
                                    <Col style={{ border: "1px solid black", textAlign: "center", width: "20%", height: "40px" }}><CheckBox checkwidth="90%"  onChange={(e) => handleCheck(index, e)} iconType="tick" checked={formValues[index].check} iconColor="#0F243E" colorIcon="White" style={{
                                        padding: "0px",
                                        marginTop: "12px",
                                        marginLeft: "20px"
                                    }} /></Col>
                                    <Col style={{ border: "1px solid black", textAlign: "center", width: "30%", height: "40px" }}><div>
                                        {index === (formValues.length - 1) && <span role="button" style={{ cursor: "pointer", fontSize: "30px" }} onClick={() => addFormFields(index)}>+</span>}
                                        {formValues.length !== 1 && <span role="button" style={{ cursor: "pointer", fontSize: "30px" }} onClick={() => removeFormFields(index)}>-</span>}
                                    </div></Col>
                                </Row>
                            </>
                        )
                    })
                    }

                    {error ? <p style={{ color: "red", textAlign: "left", margin: "5px", fontWeight: "bold" }}>Please Enter A title</p> : ""}


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
                    marginTop:"20px",
                    marginLeft:"370px",
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
        </Aux>
    );

}

export default Itemmodal;
