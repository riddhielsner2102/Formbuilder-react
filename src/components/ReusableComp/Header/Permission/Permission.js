import React, { Component } from "react";
import classes from "./Permission.module.css";
import Backdrop from "../../Backdrop";
import { Container, Row } from "react-bootstrap";
import { Close, Input } from "arms_v2.8_webui";

export default class Permission extends Component {
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <Container
          className={classes.Item}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-150vh)",
            opcaity: this.props.show ? "1" : "0",
          }}
        >
          <div
            style={{
              height: "220px",
              padding: "10px",
              margin: "0px",
            }}
          >
            <Row
              style={{
                backgroundColor: "#01396b",
                color: "white",
                height: "50px",
                display: "flex",
                padding: "15px",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "space-between" }}>
                <h3
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    letterSpacing: 0,
                    marginTop: "2px",
                    height: "64px",
                    font: "600 20px/32px Muli, Helvetica Neue, Arial, sans-serif",
                  }}
                >
                  Permission
                </h3>
                <Close
                  onClick={this.props.modalClosed}
                  style={{
                    paddingLeft: "384px",
                    marginTop: "2px",
                    cursor: "pointer",
                    color: "white",
                  }}
                />
              </div>
            </Row>
            <div className={classes.Hvr}>
              <Input
                style={{
                  border: "1px solid grey",
                  paddingTop: "20px",
                  width: "522px",
                  height: "50px",
                  marginTop: "26px",
                  paddingLeft: "10px",
                  fontSize: "18px",
                }}
                value="Preview,Create/Edit,Publish,Export"
              />
            </div>
          </div>
        </Container>
      </>
    );
  }
}
