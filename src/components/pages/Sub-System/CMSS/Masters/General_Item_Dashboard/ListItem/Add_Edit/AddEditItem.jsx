import React, { useState } from "react";
import classes from "./AddEditItem.module.css";
import { Container, Row } from "react-bootstrap";
import { Button, Close } from "arms_v2.8_webui";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";
import Mapping from "./Mapping";

const AddEditItem = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.onClose} />
      <Container className={classes.mainPage}>
        <div className={classes.Dowcls}>
          <Row
            style={{
              padding: "0px",
              margin: "0px",
              width: "100%",
              backgroundColor: "#01396b",
              color: "white",
              height: "64px",
              padding: "0 16px",
              boxSizing: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  textAlign: "left",
                  letterSpacing: 0,
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                Add&nbsp;Items
              </h3>
              <Close
                // className={classes.closebtn}
                onClick={props.modalClose}
                style={{
                  transform: props.show
                    ? "translateY(0)"
                    : "translateY(-100vh)",
                  opcaity: props.show ? "1" : "0",
                  // marginLeft: "1360px"s,
                  color: "#fff",
                  fontWeight: 800,
                  marginTop: "2px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Row>
          {/* <div className={classes.mainContent}> */}
          {/* <Mapping />
           */}
          {/* </div> */}
          <Row
            style={{
              width: "100%",
              padding: "16px",
            }}
          >
            <Mapping />
          </Row>
          <>
            <Button
              text="Save"
              // onClick={props.handleClose}
              onClick={props.modalClose}
              style={{
                backgroundColor: "#01396b !important",
                color: "#fff",
                display: "inline-block",
                whiteSpace: "nowrap",
                textDecoration: "none",
                verticalAlign: "baseline",
                textAlign: "bottom",
                margin: "47.5% 0% 0% 95%",
                height: "35px",
                width: "65px",
                padding: "0 20px",
                borderRadius: "4px",
                overflow: "visible",
              }}
            />
          </>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AddEditItem;
