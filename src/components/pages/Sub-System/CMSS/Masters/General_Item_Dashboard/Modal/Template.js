import React, { Component } from "react";
import classes from "./Template.module.css";
import Backdrop from "./Backdrop";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Close, TextArea } from "arms_v2.8_webui";

class Template extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== this.props.show ||
  //     nextProps.children !== this.props.children
  //   );
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = { value: "" };
  // }

  // updateValue = (e) => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opcaity: this.props.show ? "1" : "0",
            minWidth: "353px",
          }}
        >
          <Container
            className={[classes.divDow].join(" ")}
            style={{
              height: "400px",
              padding: "0px",
              margin: "0px",
            }}
          >
            <Row
              style={{
                backgroundColor: "#01396b",
                color: "white",
                height: "60px",
                display: "flex",
                padding: "15px",
                marginTop: "10px",
                boxSizing: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "space-between" }}>
                <h3
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    letterSpacing: 0,
                    marginTop: "2px",
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
                      : "translateY(-100vh)",
                    opcaity: this.props.show ? "1" : "0",
                    marginLeft: "370px",
                    color: "#fff",
                    fontWeight: 800,
                    marginTop: "2px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <Input
                      placeHolder="Checklist Name *"
                      style={{
                        width: "395px",
                        height: "48px",
                        border: "1px solid Gray",
                        marginLeft: "-22px",
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
                    style={{ marginLeft: "-22px", marginTop: "8px" }}
                  >
                    <Input
                      placeHolder="Description"
                      style={{
                        width: "395px",
                        height: "100px",
                        border: "1px solid Gray",
                        textAlign: "left",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col
                    xs={12}
                    style={{ marginLeft: "-22px", marginTop: "8px" }}
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
      </>
    );
  }
}

export default Template;
