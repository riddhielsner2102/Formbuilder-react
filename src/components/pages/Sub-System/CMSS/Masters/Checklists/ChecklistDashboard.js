import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Navbar from "../../../../Navbar/Navbar";
import Template from "./Modal/Template";

function ChecklistDashboard() {
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

export default ChecklistDashboard;
