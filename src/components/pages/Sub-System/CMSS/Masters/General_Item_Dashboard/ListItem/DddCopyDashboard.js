import { useState } from "react";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import Navbar from "../../../../../../ReusableComp/Navbar/Navbar";
import AddEditItem from "./Add_Edit/AddEditItem";
function DdddCopyDashboard() {
  // const [ModalData2, SetModal2] = useState({ show: false });
  const [flag, setflag] = useState(false);

  const closeNewModal = () => {
    setflag(false);
  };

  const showModal = () => {
    setflag(true);
    console.log("ModalData2 Modal");
  };

  return (
    <>
      {flag && (
        <AddEditItem
          show={flag}
          modalClose={() => {
            closeNewModal();
          }}
        />
      )}
      <Navbar
        titleIcon={<ViewDayOutlinedIcon />}
        searchbar={true}
        placeHolder="   Search Option"
        title="qwdwqqwsd"
        secondtitle="Module: CMSS"
        buttonText="Add/Edit"
        onClick={() => {
          showModal();
        }}
      />
    </>
  );
}
// }
export default DdddCopyDashboard;
