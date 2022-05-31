import React, { Component } from "react";
import classes from "./Template.module.css";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Close, TextArea } from "arms_v2.8_webui";

export default class Template extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "scale(1) translate(-50%,-50%)" : "scale(0) translate(0,0)",
            opcaity: this.props.show ? "1" : "0",
            // minWidth: "353px",
          }}
        >
          <Container
            className={[classes.divDow].join(" ")}
            style={{
              padding: "0px",
              margin: "0px",
              width : "100%"
            }}
          >
            <Row
              style={{
                backgroundColor: "#01396b",
                color: "white",
<<<<<<< HEAD:src/components/pages/Sub-System/CMSS/Masters/Checklists/Modal/Template.js
=======
                height: "50px",
>>>>>>> 937ed344c8242427e8b4e97f5ff8727de5060872:src/components/pages/Sub-System/CMSS/Masters/Checklists/Modal/Template.jsx
                display: "flex",
                padding: "15px",
                boxSizing: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "space-between" }}>
                <h3
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    letterSpacing: 0,
                    fontWeight: 500,
                  
                    // fontSize: "20px",
                  }}
                >
                  Master&nbsp;Checklist
                </h3>
                <Close
                  onClick={this.props.modalClosed}
                  style={{
                    transform: this.props.show
                      ? "translateY(0)"
                      : "translateY(-150vh)",
                    opcaity: this.props.show ? "1" : "0",
                    marginLeft: "270px",
                    color: "#fff",
                    fontWeight: 800,
                    marginTop: "2px",
                    fontSize: "20px",
                    // zIndex:1,
                    cursor: "pointer",
                  }}
                />
              </div>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <Input
                      placeHolder="Checklist Name *"
                      style={{
                        width: "100%",
                        maxWidth : "100%",
                        height: "48px",
                        border: "1px solid Gray",
                        textAlign: "left",
                        fontSize: "14px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col
                    xs={12}
                    style={{ marginTop: "8px" }}
                  >
                    <Input
                      placeHolder="Description"
                      style={{
                        width: "100%",
                        maxWidth : "100%",
                        height: "100px",
                        border: "1px solid Gray",
                        textAlign: "left",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
<<<<<<< HEAD:src/components/pages/Sub-System/CMSS/Masters/Checklists/Modal/Template.js
              <Col xs={12}>
                <Row>
                  <Col
                    xs={12}
                    style={{marginLeft: "-22px", marginTop: "8px" }}
                  >
                    {/* <ComboBox
                      options={TemplateData}
                      style={{
                        width: "395px",
                        height: "48px",
                        border: "1px solid #000",
                        alignItems: "center",
                        textAlign: "left",
                        "& .MuiSvgIcon-root": {
                          color: "#000",
                          backgroundColor: "#fff",
                          height: "45px",
                        },
                      }}
                    /> */}
                  </Col>
                </Row>
              </Col>
=======
>>>>>>> 937ed344c8242427e8b4e97f5ff8727de5060872:src/components/pages/Sub-System/CMSS/Masters/Checklists/Modal/Template.jsx

              <Col
                style={{
                  marginTop: "35px",
                  marginLeft: "75%",
                }}
              >
                <Button
                  text="Save"
                  onClick={this.props.modalClosed}
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
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
