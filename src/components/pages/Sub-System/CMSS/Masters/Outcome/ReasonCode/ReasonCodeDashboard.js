import { useState } from "react";
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import Navbar from "../../../../../Navbar/Navbar";
// import Template from "./Modal/Template"

function ReasonCodeDashboard() {
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
      {/* <Template
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      /> */}
      <Navbar
        titleIcon={<PanToolOutlinedIcon />}
        title="Master Reasoncode"
        secondtitle="Module: CMSS"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
      />
    </>
  );
}

export default ReasonCodeDashboard;
