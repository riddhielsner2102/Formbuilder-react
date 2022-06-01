import { useState } from "react";
import Itemrepodashboard from "../ItemRepo/ItemrepoDashboard";
import AgGridTable from "./AgGridTable/AgGridTable";

function ItemRepo() {
  const[disable,setdisable]=useState(true)
  const[closed,setclosed]=useState(false)
  return (
    <>
      {/* <Checklistdashboard /> */}
      <Itemrepodashboard setdisable={setdisable} disable={disable} setclosed={setclosed} />
      <AgGridTable setdisable={setdisable} disable={disable} setclosed={setclosed} closed={closed}/>
      
    </>
  );
}

export default ItemRepo;
