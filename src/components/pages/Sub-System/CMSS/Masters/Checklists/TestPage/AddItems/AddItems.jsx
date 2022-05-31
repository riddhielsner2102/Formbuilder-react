import React, { useState } from "react";
import classes from "./AddItems.module.css";
import { Container, Row } from "react-bootstrap";
import { Button, Close, Label } from "arms_v2.8_webui";
import Backdrop from "../../../../../../../ReusableComp/Backdrop";

const AddItems = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.flag} clicked={props.handleClose} />
      <Container className={classes.main}>
        <div className={classes.divDow}>
          <Row className={classes.newRow}>
            <div className={classes.header}>
              <h3>Add Items</h3>
              <Close
                className={classes.closebtn}
                onClick={props.modalClosed}
                style={{
                  //   transform: props.show
                  //     ? "translateY(0)"
                  //     : "translateY(-100vh)",
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
            <Button text="Save" onClick={props.handleClose} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AddItems;
