import React, { useState } from "react";
import GeneralRepoDashboard from "./GeneralRepoDashboard";
import AgGridTable from "./AgGridTable/AgGridTable";

export default function GeneralRepo() {
  const [disable, setdisable] = useState(false);
  const [closed, setclosed] = useState(false);
  return (
    <React.Fragment>
      <GeneralRepoDashboard
        setdisable={setdisable}
        disable={disable}
        setclosed={setclosed}
      />
      <AgGridTable
        setdisable={setdisable}
        disable={disable}
        setclosed={setclosed}
        closed={closed}
      />
    </React.Fragment>
  );
}
