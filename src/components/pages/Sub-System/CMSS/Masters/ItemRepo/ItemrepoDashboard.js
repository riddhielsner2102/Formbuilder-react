import { useState } from "react";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Navbar from "../../../../Navbar/Navbar";
// import Template from "./Modal/Template";
import Itemmodal from "./Modal/ItemrepoModal";

function ChecklistDashboard() {
  const [ModalData2, SetModal2] = useState({ show: false });
  const[Itemdata,SetItemdata]=useState()
  console.log(Itemdata);

  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };

  return (
    <>
      <Itemmodal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
        SetItemdata={SetItemdata}
      />
      <Navbar
        titleIcon={<FilterVintageIcon />}
        title="Item Repository"
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
