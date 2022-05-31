import React from "react";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import Navbar from "../../../../../../ReusableComp/Navbar/Navbar";
import Table from "./Table/Table";

export default function TestPage() {
  return (
    <React.Fragment>
      <Navbar titleIcon={<ViewDayOutlinedIcon />} title="Test" />
      <Table />
    </React.Fragment>
  );
}
