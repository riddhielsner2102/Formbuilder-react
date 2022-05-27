import { useState } from "react";
import FilterVintageOutlinedIcon from "@mui/icons-material/FilterVintageOutlined";
import Navbar from "../../Navbar/Navbar";
import Template from "./Modal/Template";

function PermissionTemplateDashboard() {
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
        titleIcon={<FilterVintageOutlinedIcon />}
        title="Permission Templates"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
      />
    </>
  );
}

export default PermissionTemplateDashboard;
