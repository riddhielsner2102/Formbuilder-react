import { useState } from "react";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import Navbar from "../../../../../../ReusableComp/Navbar/Navbar";
import AddEditModel from "./Modal/AddEditModel";
import Message from "../../../../../../ReusableComp/Message/Message";

function ReasonCodeDashboard() {
  const [ModalData2, SetModal2] = useState({ show: false });
  const [showMessage, setShowMessage] = useState(false);

  const closeNewModal = () => {
    SetModal2({ show: false });
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  };
  const showNewModal = () => {
    SetModal2({ show: true });
  };
  const handleClose = () => setShowMessage(false);

  return (
    <>
      <AddEditModel
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
      />
      {/* {showMessage && (
        <Message
          flag={showMessage}
          text="General Item created"
          handleClose={handleClose}
        />
      )} */}
      <Navbar
        titleIcon={<PanToolOutlinedIcon />}
        title="Master Reasoncode"
        secondtitle="Module: CMSS"
        buttonText="ADD"
        onClick={() => {
          showNewModal();
        }}
        searchbar={true}
        placeHolder='Search Reason code'
      />
    </>
  );
}

export default ReasonCodeDashboard;
