import React, { useState } from "react";
import classes from "./Template.module.css";
import Backdrop from "../../../../../../ReusableComp/Backdrop";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Close, TextArea } from "arms_v2.8_webui";
import Message from "../../../../../../ReusableComp/Message/Message";

function Template(props) {
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

  const [showAction, setShowAction] = useState(false);
  const showNewModal = () => {
    console.log("action clicked");
    setShowAction(!showAction);
  };

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.NocModal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opcaity: props.show ? "1" : "0",
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
              height: "64px",
              display: "flex",
              padding: "15px",
              marginTop: "20px",
              boxSizing: "borderbox",
            }}
          >
            <div style={{ display: "flex", alignItems: "space-between" }}>
              <h3
                style={{
                  color: "#fff",
                  textAlign: "left",
                  letterSpacing: 0,
                  marginTop: "2px",
                  // fontWeight: 500,
                  font: "497 22px/32px Muli, Helvetica Neue, Arial, sans-serif",
                  // fontSize: "20px",
                }}
              >
                General&nbsp;Item&nbsp;Repository
              </h3>
              <Close
                onClick={props.modalClosed}
                style={{
                  // transform: this.props.show
                  //   ? "translateY(0)"
                  //   : "translateY(-100vh)",
                  // opcaity: this.props.show ? "1" : "0",
                  marginLeft: "280px",
                  color: "#fff",
                  fontWeight: 800,
                  marginTop: "5px",
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
                    placeHolder="Title *"
                    style={{
                      width: "500px",
                      // font: "400 16px/1.125 Muli, Helvetica Neue, Arial, sans-serif !important",
                      height: "60px",
                      border: "1px solid grey",
                      fontSize: "16px",
                      padding: "0px 5px",
                      // marginLeft: "-22px",
                      // textAlign: "left",
                      borderRadius: "6px",
                      // fontSize: "14px",
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Row style={{ marginTop: "30px" }}>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <Input
                      placeHolder="Description"
                      style={{
                        fontSize: "16px",
                        width: "500px",
                        height: "100px",
                        padding: "0px 5px",
                        border: "1px solid grey",
                        borderRadius: "6px",
                        textAlign: "left",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col
              style={{
                marginTop: "35px",
                marginLeft: "75%",
              }}
            >
              <Button
                text="Save"
                onClick={props.modalClosed}
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
        {/* {props.flag && <Message text="Message has been saved" />} */}
      </div>
    </>
  );
}

export default Template;
