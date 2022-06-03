import { useState } from "react";
import Ratingdashboard from "../Rating/Ratingdashboard";
import AgGridTable from "./AgGridTable/AgGridTable";

function Rating() {
  const[disable,setdisable]=useState(true)
  const[closed,setclosed]=useState(false)
  return (
    <>
      {/* <Checklistdashboard /> */}
      <Ratingdashboard setdisable={setdisable} disable={disable} setclosed={setclosed} />
      <AgGridTable setdisable={setdisable} disable={disable} setclosed={setclosed} closed={closed}/>
      
    </>
  );
}

export default Rating;
