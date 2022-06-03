import React from "react";
import classes from "./ConfirmMessage.module.css";
import { Container, Row } from "react-bootstrap";
import { Button, Label } from "arms_v2.8_webui";
import Backdrop from "../Backdrop";

function ConfirmMessage(props) {
  return (
    <>
      <Backdrop show={props.flag} clicked={props.modalClosed} />
      <Container
        className={classes.layout}
        style={{
          minWidth: "280px",
          minHeight: "160px",
        }}
      >
        <Row
          style={{
            backgroundColor: "#fff",
            color: "Black",
            height: "30px",
            display: "flex",
            marginTop: "5px",
          }}
        >
          <div style={{ padding: "10px" }}>
            <Label
              text="Confirm"
              style={{
                color: "black",
                textAlign: "left",
                letterSpacing: 0,
                // marginTop: "15px",
                height: "64px",
                fontSize: "22px",
                paddingLeft: "12px",
                font: "497 22px/32px Muli, Helvetica Neue, Arial, sans-serif",
              }}
            />
          </div>
        </Row>

        <div
          style={{
            display: "flex",
            alignItems: "space-around",
            padding: "20px",
            marginLeft: "12px",
            padding: "12px",
          }}
        >
          <Label
            text={props.text}
            style={{
              textAlignLast: "center",
              fontFamily: "Muli, Helvetica, Neue Arial ,sansSerif",
              color: "black",
              textAlign: "left",
              letterSpacing: 0,
              paddingTop: "15px",
              fontWeight: "lighter",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            text="Confirm"
              onClick={props.Confirmcall}
            style={{
              backgroundColor: "#01396b !important",
              color: "#fff",
              display: "inline-block",
              whiteSpace: "nowrap",
              textDecoration: "none",
              verticalAlign: "baseline",
              textAlign: "center",
              margin: "0",
              width: "80px",
              height: "35px",
              padding: "0 20px",
              borderRadius: "4px",
              overflow: "visible",
              display: "flex",
              alignItems: "space-between",
              fontFamily: "Muli, Helvetica Neue, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: "600",
            }}
          />
          <div>
            <Button
              text="Cancel"
              className={classes.Hav}
              //   onClick={this.props.modalClosed}
              style={{
                backgroundColor: "#fff !important",
                color: "black",
                display: "inline-block",
                whiteSpace: "nowrap",
                textDecoration: "none",
                verticalAlign: "baseline",
                textAlign: "center",
                margin: 0,
                height: "35px",
                borderRadius: "4px",
                overflow: "visible",
                display: "flex",
                alignItems: "space-between",
                fontFamily: "Muli, Helvetica Neue, Arial, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                width: "80px",
                "&:hover": {
                  backgroundColor: "#cccccc !important",
                },
              }}
              onClick={props.onCancel}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ConfirmMessage;
