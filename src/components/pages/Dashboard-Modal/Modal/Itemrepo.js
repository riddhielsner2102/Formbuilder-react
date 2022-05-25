import React, { useState } from "react";
import classes from "./Template.module.css";
import Backdrop from "../components/Backdrop";
import Aux from "../hoc/Auxiliary/Auxiliary";
import { Container, Row, Col, Table } from "react-bootstrap";
import { TemplateData } from "./TemplateData";
import { TemplateData2 } from "./TemplateData2";
import { Input, Button, Close, CheckBox, ComboBox } from "arms_v2.8_webui";
import ItemRepotable from "../../ItemRepo/ItemRepotable";

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
        // console.log(JSON.stringify(formValues));
        console.log(a, "a");
        if (a.length) {
            seterror(true)
        }
    }
    const handleCheck = (i, e) => {
        console.log(i, e, "hhhhhh");
        let newFormValues = [...formValues];
        // setcheck(!Check)
        newFormValues[i].check = setcheck(!Check);
        console.log(newFormValues, "newFormValues");
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
                    <ItemRepotable/>
                </Container>
                <Button
                  text="Save"
                //   onClick={this.props.modalClosed}
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
