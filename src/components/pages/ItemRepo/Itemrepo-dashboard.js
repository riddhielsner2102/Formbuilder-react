import React, { useState } from "react";
import Template from "../Dashboard-Modal/Modal/Template";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Input, Button } from "arms_v2.8_webui";
import Itemmodal from "../Dashboard-Modal/Modal/ItemrepoModal"

const Itemrepodashboard = () => {
    const [ModalData2, SetModal2] = useState({ show: false });
    const [Itemdata, SetItemdata] = useState();
console.log(Itemdata!==undefined && JSON?.parse(Itemdata),"Itemdata");
  const closeNewModal = () => {
    SetModal2({ show: false });
  };
  const showNewModal = () => {
    SetModal2({ show: true });
    console.log("template Modal");
  };
  return (
    <React.Fragment>
    <div className="header-main"
      style={{
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        padding: "22px 20px 35px",
        alignItems:"center",
        backgroundColor: "#01396b",
        // width: "100%",
      }}
    >
      <div
        style={{
          color: "#fff",
          display: "flex",
          fontSize: "19px",
          fontWeight: "bold",
          backgroundColor: "#01396b",
        }}
      >
        <FilterVintageIcon style={{ backgroundColor: "#01396b" }} />
        <font style={{ paddingLeft: "10px", backgroundColor: "#01396b" }}>
         Item Repository
        </font>
      </div>
      <div style={{ color: "#fff", backgroundColor: "#01396b" }}>
      
        <div className="search-menu" style={{display:"flex",alignItem:"center"}}>
        <SearchOutlinedIcon style={{ backgroundColor: "#01396b" }} />
        <Input 
          placeHolder="Search Template"
          style={{
            backgroundColor: "#fff",
             padding: "0 16px",
            width: "200px",
            height:"23px",
            // border: "none",
            outline: "none",
            borderRadius: "0px 30px 30px 0px",
          }}
        />
        </div>
        {/* <CheckBox iconType="tick" /> */}
      </div>
      <Itemmodal
        show={ModalData2.show}
        modalClosed={() => {
          closeNewModal();
        }}
        SetItemdata={SetItemdata}
      />
      <div>
        <Button
          text="ADD"
          onClick={() => {
            showNewModal();
          }}
          style={{
            backgroundColor: "#fff !important",
            color: "#01396b",
            display: "inline-block",
            whiteSpace: "nowrap",
            textDecoration: "none",
            verticalAlign: "baseline",
            textAlign: "center",
            margin: 0,
            minWidth: "64px",
            lineHeight: "10px",
            borderRadius: "4px",
            overflow: "visible",
          }}
        />
      </div>
    </div>
  </React.Fragment>
  )
}

export default Itemrepodashboard