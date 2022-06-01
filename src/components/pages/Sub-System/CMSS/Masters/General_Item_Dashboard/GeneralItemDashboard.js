import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Template from "./Modal/Template";
import Navbar from "../../../../../ReusableComp/Navbar/Navbar";
import Message from "../../../../../ReusableComp/Message/Message";

function GeneralItemDashboard() {
  const [ModalData2, SetModal2] = useState({ show: false });
  const [flag, setflag] = useState(false);

  const closeNewModal = () => {
    SetModal2({ show: false });
    // setInterval(() => {
    //   setflag(true);
    // }, 1000);

    setTimeout(() => {
      setflag(true);
    }, 1000);
  };

  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  const handleClose = () => setflag(false);
  console.log(flag);
  return (
    <>
      <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
        // flag={flag}
      />
      {flag && (
        <Message
          flag={flag}
          text="General Item created"
          // type="CheckCircleOutlineIcon"
          titleIcon={<CheckCircleOutlineIcon />}
          handleClose={handleClose}
        />
      )}
      <Navbar
        titleIcon={<DashboardOutlinedIcon />}
        searchbar={true}
        title="General Item Dashboard"
        placeHolder="  Search Items"
        secondtitle="Module: CMSS"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
      />
    </>
  );
}

export default GeneralItemDashboard;
