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
      <Container className={classes.main}>
        <div className={classes.divDow}>
          <Row className={classes.newRow}>
            <div className={classes.header}
            style={{
              display:'flex',
              justifyContent:'space-between',
            }}
            >
              <div>
              <h3>Add&nbsp;Items</h3>
              </div>
              <div>
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
            </div>
          </Row>
          <div className={classes.mainContent}>
        <Mapping  />
          </div>
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
