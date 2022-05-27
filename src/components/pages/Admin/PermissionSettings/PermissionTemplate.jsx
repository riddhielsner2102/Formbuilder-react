import React from "react";
import PermissionTemplateDashboard from "./PermissionTemplateDashboard";
import AgGridTable from "./AgGridTable/AgGridTable";

function PermissionTemplate() {
  return (
    <>
      <PermissionTemplateDashboard />
      <AgGridTable />
    </>
  );
}

export default PermissionTemplate;
