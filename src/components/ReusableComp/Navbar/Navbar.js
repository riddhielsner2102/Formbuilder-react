import React, { useState } from "react";
// import Template from "../../../components/pages/Dashboard-Modal/Modal/Template";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import { Input, Button } from "arms_v2.8_webui";
import { display } from "@mui/system";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className="header-main"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "22px 20px 35px",
          alignItems: "center",
          backgroundColor: "#01396b",
          // width: "100%",
        }}
      >
        <div className="list-item"
          style={{
            color: "#fff",
            display: "flex",
            fontSize: "19px",
            marginBottom: "10px",
            fontWeight: "bold",
            backgroundColor: "#01396b",
          }}
        >
          <IconButton
            style={{
              backgroundColor: "#01396b",
              marginBottom: "10px",
              color: "#fff",
            }}
          >
            {props.titleIcon}
          </IconButton>
          {/* <FilterVintageIcon style={{ backgroundColor: "#01396b" }} /> */}
          <font style={{ paddingLeft: "10px", backgroundColor: "#01396b" }}>
            {props.title}
          </font>
        </div>
        <div className="list-item">
          <font
            style={{
              color: "#fff",
              display: "flex",
              fontSize: "19px",
              fontWeight: "bold",
              backgroundColor: "#01396b",
            }}
          >
            {props.secondtitle}
          </font>
        </div>
        <div className="menu-items" style={{ color: "#fff", backgroundColor: "#01396b" , display:"flex" }}>
          <div className="search-icon" style={{display:"flex !important"}}>
          <SearchOutlinedIcon className="search-icon" style={{ backgroundColor: "#01396b", display:"flex !important" }} /></div>
          <div className="search-menu" style={{display:"inline-block"}}>
          <Input
          placeHolder={props.placeHolder}
            // placeHolder="Search Templates"
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
        </div>
        <div>
          <Button
            text={props.buttonText}
            onClick={props.onClick}
            style={{
              backgroundColor: "#fff !important",
              color: "#01396b",
              display: "inline-block",
              whiteSpace: "nowrap",
              textDecoration: "none",
              verticalAlign: "baseline",
              textAlign: "center",
              margin: 0,
              minWidth: "100px",
              lineHeight: "10px",
              borderRadius: "4px",
              overflow: "visible",
            }}
          />
        </div>

        {props.buttonText2 && (
          <div>
            <Button
              text={props.buttonText2}
              onClick={props.onClicked}
              // disabled={props.disable}
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
        )}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
