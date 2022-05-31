// // import React, {  } from "react";
// import React, { useState } from "react";
// import classes from "./Message.module.css";
// // import Backdrop from "../../components/Backdrop";
// // import Aux from "../../hoc/Auxiliary/Auxiliary";
// import { Container, Row } from "react-bootstrap";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// import { Button, Label } from "arms_v2.8_webui";
// import Aux from "../../pages/Dashboard-Modal/hoc/Auxiliary/Auxiliary";
// import Backdrop from "../../pages/Dashboard-Modal/components/Backdrop";
// // import backdrop from "../../pages/Sub-System/CMSS/Masters/General_Item_Dashboard/Modal/Backdrop";

// // class Formmessage extends Component {
// //   render() {
// function Message(props) {
//   console.log(props,"this is my props");
//   // const [show, setShow] = useState(false);

//   const handleClose = () => props.setshowmessage(false);
//   // const handleShow = () => setShow(true);

//   // const onLoginFormSubmit = (e) => {
//   //   e.preventDefault();
//   //   handleClose();
//   // };
//   return (
//     <Aux>
//       <Backdrop show={props.flag} clicked={props.handleClose} />
//       <Container
//         className={classes.Mod}
//         // style={{
//         //   transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
//         //   opcaity: this.props.show ? "1" : "0",
//         //   minWidth: "100px",
//         // }}
//       >
//         <div
//           className={[classes.divDow].join(" ")}
//           style={{
//             height: "200px",
//             // padding: "10px",
//             margin: "0px",
//             width: "100%",
//             maxWidth: "80vw",
//           }}
//         >
//           <Row
//             style={{
//               backgroundColor: "#01396b",
//               color: "white",
//               height: "64px",
//               display: "flex",
//               padding: "15px",
//               marginTop: "20px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <h3
//                 style={{
//                   color: "#fff",
//                   textAlign: "left",
//                   letterSpacing: 0,
//                   // marginTop: "2px",
//                   height: "100%",
//                   font: "497 18px/32px Muli, Helvetica Neue, Arial, sans-serif",
//                 }}
//               >
//                 Message
//               </h3>
//             </div>
//           </Row>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "space-around",
//               padding: "20px",
//             }}
//           >
//             <CheckCircleOutlineIcon
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 backgroundRepeat: "no-repeat",
//                 fill: "currentColor",
//                 height: "24px",
//                 width: "24px",
//               }}
//             />

//             <Label
//               text={props.text}
//               style={{
//                 textAlignLast: "center",
//                 fontFamily: "Muli, Helvetica, Neue Arial ,sansSerif",
//                 // fontWeight: "bolder",
//                 color: "black",
//                 textAlign: "left",
//                 letterSpacing: 0,
//                 marginTop: "2px",
//                 paddingLeft: "10px",
//                 fontSize: "18px",
//               }}
//               s
//             />
//           </div>
//           <>
//             <Button
//               text="OK"
//               // onClick={this.props.modalClosed}
//               onClick={()=>handleClose()}
//               style={{
//                 backgroundColor: "#01396b !important",
//                 color: "#fff",
//                 display: "inline-block",
//                 whiteSpace: "nowrap",
//                 textDecoration: "none",
//                 verticalAlign: "baseline",
//                 textAlign: "center",
//                 margin: 0,
//                 // minWidth: "64px",
//                 // lineHeight: "40px",
//                 height: "40px",
//                 width: "65px",
//                 padding: "0 20px",
//                 borderRadius: "4px",
//                 overflow: "visible",
//               }}
//             />
//           </>
//         </div>
//       </Container>
//     </Aux>
//   );
// }
// //   }
// // }

// export default Message;

// import React, {  } from "react";
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
import { Input, Close, ComboBox, CheckBox } from "arms_v2.8_webui";
// import Icon from "@mui/icons-material";
import { Button, Label } from "arms_v2.8_webui";
// import Aux from "../../pages/Dashboard-Modal/hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop";
import IconButton from "@mui/material/IconButton";

// class Formmessage extends Component {
//   render() {
function Message({ setedit, seteditdata, editdata }) {
  // console.log(props,"this is my props");
  // const [show, setShow] = useState(false);

  const handleClose = () => setedit(false);
  // const handleShow = () => setShow(true);

  // const onLoginFormSubmit = (e) => {
  //   e.preventDefault();
  //   handleClose();
  // };
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
              value={editdata.RepTitle}
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
                textAlign: "left",
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
