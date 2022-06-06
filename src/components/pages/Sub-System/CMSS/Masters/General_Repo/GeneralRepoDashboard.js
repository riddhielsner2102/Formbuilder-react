import { useState } from "react";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import Navbar from "../../../../../ReusableComp/Navbar/Navbar";
// import Template from "./Modal/Template";
import ItemModal from "./Modal/ItemModal";

function GeneralRepoDashboard(props) {
  const [ModalData2, SetModal2] = useState({ show: false });
  const [Itemdata, SetItemdata] = useState();
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
      <ItemModal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
        setdisable={props.setdisable}
        SetModal2={SetModal2}
        setclosed={props.setclosed}
        SetItemdata={SetItemdata}
      />
      <Navbar
        titleIcon={<GroupWorkOutlinedIcon />}
        title="General Repository"
        secondtitle="Module: CMSS"
        placeHolder="   Search Items"
        buttonText="ADD"
        searchbar={true}
        onClick={() => {
          showNewModal();
        }}
        disable={props.disable}
      />
    </>
  );
}

export default GeneralRepoDashboard;
