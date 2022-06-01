import React, { useState } from "react";
import classes from "./AddItems.module.css";
import { Container, Row } from "react-bootstrap";
import { Button, Close, Label } from "arms_v2.8_webui";
import ItemMapping from "./ItemMapping";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";

const AddItems = (props) => {
  console.log(props.show, "show");
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.onClose} />
      <Container className={classes.main}>
        <div className={classes.divDow}>
          <Row className={classes.newRow}>
            <div className={classes.header}>
              <h3>Add Items</h3>
              <Close
                className={classes.closebtn}
                onClick={props.modalClosed}
                style={{
                  transform: props.show
                    ? "translateY(0)"
                    : "translateY(-100vh)",
                  opcaity: props.show ? "1" : "0",
                  marginLeft: "1500px",
                  color: "#fff",
                  fontWeight: 800,
                  marginTop: "2px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Row>
          <div className={classes.mainContent}>
            <ItemMapping />
          </div>
          <>
            <Button
              text="Save"
              onClick={props.handleClose}
              style={{
                backgroundColor: "#01396b !important",
                color: "#fff",
                display: "inline-block",
                whiteSpace: "nowrap",
                textDecoration: "none",
                verticalAlign: "baseline",
                textAlign: "bottom",
                margin: "40% 0% 0% 95%",
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
    </React.Fragment>
  );
};

export default AddItems;
