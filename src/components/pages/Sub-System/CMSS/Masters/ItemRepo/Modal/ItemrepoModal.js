import React, { useState } from "react";
import classes from "./Template.module.css";
import Backdrop from "./Backdrop";
import AddIcon from "@mui/icons-material/Add";
import {
  requests,
  PrepareRequest,
} from "../../../../../../../Service/getRequests";
import Aux from "../../../../../Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import { Container, Row, Col } from "react-bootstrap";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Input, Button, Close, CheckBox, ComboBox } from "arms_v2.8_webui";
import "./Itemrepomodal.css"

function Itemmodal(props) {
<<<<<<< HEAD
    const [Check, setcheck] = useState(true)
    const [error, seterror] = useState(false)
    const[repeatederror ,setrepeatederror]=useState(false)
    const [formValues, setFormValues] = useState([{ name: "", check: Check }])
    let addFormFields = (i,x) => {
        
        console.log(x!==""&&formValues,"good");
        // console.log(formValues.find((E)=>E.name===x),"good");
        // console.log(formValues.map((item)=>{
        //     console.log(item.name.includes(x),"This is X");
        //     return <div></div>
        // }));
        const b=formValues.slice(0,formValues.length-1)
        console.log(b.find((e)=>e.name===x),"this is");
        const a=b.find((item)=>
     item.name===x)
        if (formValues[i].name === "" ) {
            seterror(true)
        } 
        else if( a){
setrepeatederror(true)
        }
        else {
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
            setrepeatederror(false)
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
        } else {
            // const URL = `${requests.validateLogin}?userName=${encryptedUserName}&password=${encryptedPassword}`;
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
                    minHeight: "250px",
                    maxHeight: "400px",
                    overflow: "scroll"
                }}
            >
                <Container >
                    <Row
                        style={{
                            backgroundColor: "#01396b",
                            color: "white",
                            height: "64px",
                            display: "flex",
                            justifyContent:"space-around",
                            alignItems:"center",
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
                    <Row style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center", marginLeft: "10px",
                        marginRight: "10px", marginTop: "10px",
                        border: "1px solid black", padding: "10px"
                        
                    }} className="bluerow">
                        <Col style={{
                            borderRight: "1px solid black",
                            // borderRightWidth:"200px",
                            textAlign: "start",
                            fontWeight:"bold",
                            width: "50%"
                        }}>Title
                        </Col>
                        <Col style={{
                            borderRight: "1px solid black",
                            width: "20%",
                            fontWeight:"bold",
                        }}>
                            Is Active
                        </Col>
                        <Col style={{ width: "30%" ,fontWeight:"bold",}}>
                            Actions
                        </Col>
                    </Row>
                    {formValues.map((element, index) => {
                        return (
                            <>
                                <Row
                                    style=
                                    {{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center", marginLeft: "10px",
                                        marginRight: "10px",
                                    }}>
                                    <Col
                                        style={{
                                            border: "1px solid black",
                                            textAlign: "center",
                                            backgroundColor: "lightyellow",
                                            width: "50%", height: "40px"
                                        }}><Input
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
                                    <Col style={{
                                        border: "1px solid black",
                                        textAlign: "center", width: "20%",
                                        height: "40px"
                                    }}>
                                        <CheckBox checkwidth="140%"
                                            onChange={(e) => handleCheck(index, e)}
                                            iconType="tick" checked={formValues[index].check}
                                            iconColor="#0F243E"
                                            name="check"
                                            colorIcon="White"
                                            style={{
                                                padding: "0px",
                                                borderRadius: "1px",
                                                marginTop: "12px",
                                                marginLeft: "20px"
                                            }} />
                                    </Col>
                                    <Col style={{
                                        border: "1px solid black",
                                        textAlign: "left", width: "30%",
                                        height: "40px"
                                    }}>
                                        <div>
                                            {index === (formValues.length - 1) && <span role="button" style={{
                                                cursor: "pointer",
                                                fontSize: "30px",
                                                paddingLeft:"10px"
                                            }}
                                                onClick={() => addFormFields(index,formValues[index].name)}>
                                                <AddIcon />
                                            </span>}
                                            {formValues.length !== 1 && <span role="button"
                                                style={{
                                                    cursor: "pointer",
                                                    fontSize: "30px",
                                                    paddingLeft:"10px"
                                                }}
                                                onClick={() => removeFormFields(index)}>
                                                <DeleteOutlineIcon />
                                            </span>}
                                        </div></Col>
                                </Row>
                            </>
                        )
                    })
                    }

                    {error ? <p style={{ color: "red", textAlign: "left", margin: "5px", fontSize:"14px" }}>
                        Please Enter A title
                    </p> : ""}
                    {repeatederror ? <p style={{ color: "red", textAlign: "left", margin: "5px", fontSize:"14px" }}>
                    Item Title already exists
                    </p> : ""}
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
        </Aux>
=======
  const [Check, setcheck] = useState(true);
  const [error, seterror] = useState(false);
  const [repeatederror, setrepeatederror] = useState(false);
  const [formValues, setFormValues] = useState([{ name: "", check: Check }]);
  let addFormFields = (i, x) => {
    console.log(x !== "" && formValues, "good");
    // console.log(formValues.find((E)=>E.name===x),"good");
    // console.log(formValues.map((item)=>{
    //     console.log(item.name.includes(x),"This is X");
    //     return <div></div>
    // }));
    const b = formValues.slice(0, formValues.length - 1);
    console.log(
      b.find((e) => e.name === x),
      "this is"
>>>>>>> 1811a1622aaf9f2bf7631c6f3e1d20fed5cd22c2
    );
    const a = b.find((item) => item.name === x);
    if (formValues[i].name === "") {
      seterror(true);
    } else if (a) {
      setrepeatederror(true);
    } else {
      // console.log(newFormValues.disable=true,"new");
      // newFormValues[i-1].disable=!disable
      setFormValues([...formValues, { name: "", check: Check }]);
    }
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    if (formValues[i].name !== "") {
      seterror(false);
      setrepeatederror(false);
      setFormValues(newFormValues);
    }
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    // if(formValues[i+1].name===""){
    seterror(false);
    setFormValues(newFormValues);
    // }
    // seterror(true)
  };

  const handleSubmit = (event) => {
    const a = formValues.filter((e) => e.name === "");
    // console.log(JSON.stringify(formValues,"Itemdata"));

    console.log(a, "a");
    if (a.length) {
      seterror(true);
    } else {
      // const URL = `${requests.validateLogin}?userName=${encryptedUserName}&password=${encryptedPassword}`;
      props.SetItemdata(JSON.stringify(formValues));
    }
  };
  const handleCheck = (i, e) => {
    console.log(i, e, "hhhhhh");
    let newFormValues = [...formValues];
    // setcheck(!Check)
    newFormValues[i].check = setcheck(!Check);
    setFormValues(newFormValues);
  };

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
                // borderRightWidth:"200px",
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
                      value={element.name || ""}
                      name="name"
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
                      checked={formValues[index].check}
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
    </Aux>
  );
}

export default Itemmodal;
