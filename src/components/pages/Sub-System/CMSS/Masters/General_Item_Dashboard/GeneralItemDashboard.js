import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import Navbar from "../../../../Navbar/Navbar";
import Template from "./Modal/Template";
import Navbar from "../../../../Navbar/Navbar";
// import Template from "../../../../Dashboard-Modal/Modal/Template";

function GeneralItemDashboard() {
  const [ModalData2, SetModal2] = useState({ show: false });

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  return (
    <>
      <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      <Navbar
        titleIcon={<CheckCircleOutlineIcon />}
        title="Checklists"
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
