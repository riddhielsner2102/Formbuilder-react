import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Navbar from "../../../../../ReusableComp/Navbar/Navbar";
import Template from "./Modal/Template";

export default function ChecklistDashboard() {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
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
        title="Checklists"
        secondtitle="Module: CMSS"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
      />
    </React.Fragment>
  );
}
