import { useState } from "react";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
// import Template2 from "./Modal/Template2";
import Navbar from "../../../../../../ReusableComp/Navbar/Navbar";

function DdddCopyDashboard() {
  // const [ModalData2, SetModal2] = useState({ show: false });
  // const [flag, setflag] = useState(false);

  //   const closeNewModal = () => {
  //     SetModal2({ show: false });
  //     // setInterval(() => {
  //     //   setflag(true);
  //     // }, 1000);

  //     setTimeout(() => {
  //       setflag(true);
  //     }, 1000);
  //   };

  // const showNewModal = () => {
  //   SetModal2({ show: true });
  //   console.log("Template2 Modal");
  // };

  //   const handleClose = () => setflag(false);
  //   console.log(flag);
  return (
    <>
      {/* <Template2
      // show={ModalData2.show}
      // modalClosed={() => {
      //   closeNewModal();
      // }}
      // flag={flag}
      /> */}
      {/* {flag && (
        <Message
          flag={flag}
          text="ddd-Copy-Copy"
          // type="CheckCircleOutlineIcon"
          titleIcon={<CheckCircleOutlineIcon />}
          handleClose={handleClose}
        />
      )} */}
      <Navbar
        titleIcon={<ViewDayOutlinedIcon />}
        searchbar={true}
        placeHolder="   Search Option"
        title="ddd-Copy-Copy"
        secondtitle="Module: CMSS"
        buttonText="ADD"
        // onClick={() => {
        //   showNewModal();
        // }}
      />
    </>
  );
}

export default DdddCopyDashboard;
