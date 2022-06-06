import React from "react";
import Dashboardpage from "./Dashboardpage";
import AgGridTable from "./AgGridTable/AgGridTable";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Dashboardpage />
      <AgGridTable />
    </React.Fragment>
  );
}
