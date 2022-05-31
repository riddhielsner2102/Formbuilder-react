

import React, { useState } from "react";
import classes from "./Message.module.css";
import { Container, Row } from "react-bootstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Input, Close, ComboBox, CheckBox } from "arms_v2.8_webui";
import {
  requests,
  PrepareRequest,
} from "../../../Service/postRequests";
import { Button, Label } from "arms_v2.8_webui";
// import Aux from "../../pages/Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop";
import IconButton from "@mui/material/IconButton";


function Message({ setedit, seteditdata, editdata }) {
  // const [show, setShow] = useState(false);
  const[rowdata,setrowdata]=useState(editdata)
  console.log(rowdata,"rowdata")
  const handleClose = () => {
  setedit(false);
}

  return (
    <>
      <Backdrop
      //  show={props.flag} 
      //  clicked={props.handleClose} 
      />
      <Container
        className={classes.Mod}
        style={{
          // transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          // opcaity: this.props.show ? "1" : "0",
          minWidth: "200px",
        }}
      >
        <div
          className={[classes.divDow].join(" ")}
          style={{
            height: "300px",
            // padding: "10px",
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
            <Input
              value={rowdata.ID}
              onChange={(e)=>
                // const rowdata.ID=e.target.value;
                console.log(e.target.value)
              }
              placeholder="TemplateName *"
              style={{
                width: "395px",
                height: "48px",
                border: "1px solid #000",
                alignItems: "center",
                marginLeft: "0px",
                textAlign: "left",
              }}
            />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
            <CheckBox
              checkwidth="140%"
              // onChange={(e) => handleCheck(index, e)}
              iconType="tick"
              // checked={formValues[index].IsActive}
              iconColor="#0F243E"
              name="check"
              colorIcon="White"
              style={{
                padding: "0px",
                borderRadius: "1px",
                marginLeft: "23px"
              }}
            />
            <Label
              text="Is Active"
              style={{
                textAlignLast: "center",
                fontFamily: "Muli, Helvetica, Neue Arial ,sansSerif",
                color: "black",
                // textAlign: "left",
                letterSpacing: 0,
                marginTop: "2px",
                fontSize: "18px",
              }}
            />
          </div>
          <Button
            text="OK"
            // onClick={this.props.modalClosed}
            onClick={() => handleClose()}
            style={{
              backgroundColor: "#01396b !important",
              color: "#fff",
              display: "inline-block",
              whiteSpace: "nowrap",
              textDecoration: "none",
              verticalAlign: "baseline",
              textAlign: "center",
              margin: 0,
              // minWidth: "64px",
              // lineHeight: "40px",
              height: "40px",
              width: "65px",
              padding: "0 20px",
              borderRadius: "4px",
              overflow: "visible",
            }}
          />
        </div>
      </Container>
    </>
  );
}

export default Message;
