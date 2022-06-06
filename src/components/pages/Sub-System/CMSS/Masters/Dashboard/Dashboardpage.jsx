import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Navbar from "../../../../../ReusableComp/Navbar/Navbar";
import Template from "./Modal/Template";

export default function Dashboardpage() {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("Dashboard Modal");
  };

  return (
    <React.Fragment>
      <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      <Navbar
        titleIcon={<CheckCircleOutlineIcon />}
        searchbar={true}
        title="Form Dashboard"
        placeHolder="Search Forms"
        secondtitle="Module: CMSS"
        buttonText="import"
        buttonText2="create New Form"
        onClick={() => {
          showNewModal();
        }}
      />
    </React.Fragment>
  );
}
