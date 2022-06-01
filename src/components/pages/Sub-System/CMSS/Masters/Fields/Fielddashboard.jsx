import { useState } from "react";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Navbar from "../../../../../ReusableComp/Navbar/Navbar";
// import Template from "./Modal/Template";
import FieldModal from "./Modal/FieldModal";

function ChecklistDashboard(props) {
  const [ModalData2, SetModal2] = useState({ show: false });
  const[Itemdata,SetItemdata]=useState()
  // const [disable,setdisable]=useState(false)
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
{  ModalData2.show&& <FieldModal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
        setdisable={props.setdisable}
        SetModal2={SetModal2}
        setclosed={props.setclosed}
        SetItemdata={SetItemdata}
      />}
      <Navbar
        titleIcon={<FilterVintageIcon />}
        title="Master Field"
        searchbar={true}
        secondtitle="Module: CMSS"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
        // disable={props.disable}
      />
    </>
  );
}

export default ChecklistDashboard;
