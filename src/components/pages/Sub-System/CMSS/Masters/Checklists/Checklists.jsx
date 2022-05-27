import React from "react";
import ChecklistDashboard from "./ChecklistDashboard";
import AgGridTable from "./AgGridTable/AgGridTable";

export default function Checklists() {
  return (
    <React.Fragment>
      <ChecklistDashboard />
      <AgGridTable />
    </React.Fragment>
  );
}
