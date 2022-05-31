// <<<<<<< HEAD
// import React from "react";
// import classes from "./Message.module.css";
// import { Container, Row } from "react-bootstrap";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { Button, Label } from "arms_v2.8_webui";
// import Backdrop from "../Backdrop";

import React, { useState } from "react";
import classes from "./Message.module.css";
import { Container, Row } from "react-bootstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import Icon from "@mui/icons-material";
import { Button, Label } from "arms_v2.8_webui";
// import Aux from "../../pages/Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop";
import IconButton from "@mui/material/IconButton";

function Message(props) {
  return (
    <>
      <Backdrop show={props.flag} clicked={props.handleClose} />
      <Container className={classes.Mod}>
        <div
          className={[classes.divDow].join(" ")}
          style={{
            height: "200px",
            margin: "0px",
            width: "100%",
            maxWidth: "80vw",
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
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3
                style={{
                  color: "#fff",
                  textAlign: "left",
                  letterSpacing: 0,
                  height: "100%",
                  font: "497 18px/32px Muli, Helvetica Neue, Arial, sans-serif",
                }}
              >
                Message
              </h3>
            </div>
          </Row>
          <div
            style={{
              display: "flex",
              alignItems: "space-around",
              padding: "20px",
            }}
          >
            <IconButton
            // style={{
            //   backgroundColor: "#01396b",
            //   marginBottom: "10px",
            //   color: "#fff",
            // }}
            >
              {props.titleIcon}
              {/* <CheckCircleOutlineIcon
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  backgroundRepeat: "no-repeat",
                  fill: "currentColor",
                  height: "24px",
                  width: "24px",
                }}
              /> */}
            </IconButton>
            {/* <Icon
              type={props.type}
              style={{
                display: "flex",
                justifyContent: "space-around",
                backgroundRepeat: "no-repeat",
                fill: "currentColor",
                height: "24px",
                width: "24px",
              }}
            /> */}

            <Label
              text={props.text}
              style={{
                textAlignLast: "center",
                fontFamily: "Muli, Helvetica, Neue Arial ,sansSerif",
                color: "black",
                textAlign: "left",
                letterSpacing: 0,
                marginTop: "2px",
                paddingLeft: "10px",
                fontSize: "18px",
              }}
            />
          </div>
          <>
            <Button
              text="OK"
              onClick={props.handleClose}
              style={{
                backgroundColor: "#01396b !important",
                color: "#fff",
                display: "inline-block",
                whiteSpace: "nowrap",
                textDecoration: "none",
                verticalAlign: "baseline",
                textAlign: "center",
                margin: 0,
                height: "40px",
                width: "65px",
                padding: "0 20px",
                borderRadius: "4px",
                overflow: "visible",
              }}
            />
          </>
        </div>
      </Container>
    </>
  );
}

export default Message;
