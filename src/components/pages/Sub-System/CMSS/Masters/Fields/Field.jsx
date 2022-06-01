import { useState } from "react";
import Fielddashboard from "../Fields/Fielddashboard";
import AgGridTable from "./AgGridTable/AgGridtable";

function ItemRepo() {
  const[disable,setdisable]=useState(true)
  const[closed,setclosed]=useState(false)
  return (
    <>
      {/* <Checklistdashboard /> */}
      <Fielddashboard setdisable={setdisable} disable={disable} setclosed={setclosed} />
      <AgGridTable setdisable={setdisable}  setclosed={setclosed} closed={closed}/>
      
    </>
  );
}

export default ItemRepo;
