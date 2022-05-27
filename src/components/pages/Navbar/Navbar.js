import React, { useState } from "react";
import Template from "../Dashboard-Modal/Modal/Template";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import { Input, Button } from "arms_v2.8_webui";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row", 
          justifyContent: "space-between",
          padding: "22px 20px 35px",
          alignItems:"center",
          backgroundColor: "#01396b",
          className: "header-main",
          // width: "100%",
        }}
      >
        <div
          style={{
            color: "#fff",
            display: "flex",
            fontSize: "19px",
            marginBottom:"10px",
            fontWeight: "bold",
            backgroundColor: "#01396b",
          }}
        >
          <IconButton style={{ backgroundColor: "#01396b", marginBottom:"10px", color: "#fff" }}>
            {props.titleIcon}
          </IconButton>
          {/* <FilterVintageIcon style={{ backgroundColor: "#01396b" }} /> */}
          <font style={{ paddingLeft: "10px", backgroundColor: "#01396b" }}>
            {props.title}
          </font>
        </div>
        <div>
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
        <div style={{ color: "#fff", backgroundColor: "#01396b" }}>
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
              minWidth: "64px",
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
