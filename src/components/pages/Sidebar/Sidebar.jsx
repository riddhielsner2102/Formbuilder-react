import React, { useEffect, useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import "./Sidebar.css";
import Header from "../header/header";
import Navbar from "../Navbar/Navbar";
import AgGridTable from "../AgGridTable/AgGridTable";
import LogoImage from "../../assets/images/logos/ARMS2.5-2 - Copy (2).png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Button } from "arms_v2.8_webui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getData } from "../../../Services/sidebar_api";
// import { IconContext } from "react-icons/lib";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);

  const [showHeader, setShowHeader] = useState(true);
  const handleDrawerOpen = () => {
    console.log("handleDrawerOpen");
    setSidebar(true);
    setShowHeader(true);
  };
  const handleDrawerClose = () => {
    console.log("handleDrawerClose");
    setSidebar(false);
    setShowHeader(false);
    // setOpens(false)
  };
  useEffect(() => {
    console.log("showHeader", showHeader);
  }, [showHeader]);

  const [sidebarData, setSidebarData] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => {
        console.log("res", res);
        setSidebarData(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const dropDownData = [
    {
      id: 1,
      icon: (
        <SettingsOutlinedIcon
          // fontSize="small"
          sx={{ fontSize: "16px" }}
        />
      ),
      title: "Sub System",
      iconClosed: <ChevronRightIcon />,
      iconOpened: <KeyboardArrowDownIcon />,
      subNav: sidebarData,
    },
    {
      id: 2,
      title: "Admin",
      iconClosed: <ChevronRightIcon />,
      iconOpened: <KeyboardArrowDownIcon />,
      subNav: [
        {
          ShortName: "Permission Settings",
          // path: "/events/events1",
          icon: "",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // , flex: '1 1 auto'
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="sidebarNav"
        // style={{ left: sidebar ? '0' : '-100%' }}
        style={{
          width: !sidebar ? "68px" : "280px",
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.35)",
          overflowX: "hidden",
          // overflowY: 'auto'
          // height: '100%', position: 'relative'
        }}
        // sidebar={sidebar}
        onMouseEnter={() => setSidebar(true)}
        onMouseLeave={() => {
          console.log("onMouseLeave");
          if (showHeader) {
            setSidebar(true);
          } else {
            setSidebar(false);
          }
          // setSidebar(false)
        }}
      >
        <div style={{ width: "100%", position: "relative" }}>
          <div
            //  style={{ marginBottom: '65px' }}
            style={{
              backgroundColor: "white",
              position: "sticky",
              top: 0,
              left: 0,
            }}
          >
            <div className="sidebar-main-head">
              <div className="sidebar-head" style={{ overflowY: "hidden" }}>
                <div
                  style={{
                    width: sidebar ? "208px" : "32px",
                    height: sidebar ? "83px" : "32px",
                  }}
                >
                  <img
                    src={LogoImage}
                    alt="logo"
                    width="100%"
                    height="100%"
                    style={{ position: "relative", top: "-5px" }}
                  />
                </div>
                <div>
                  {sidebar && (
                    <Button
                      className="sidebar-head-btn"
                      text={<MenuOutlinedIcon />}
                      onClick={
                        showHeader ? handleDrawerClose : handleDrawerOpen
                      }
                      style={{
                        color: "#000",
                        backgroundColor: "#fff !important",
                        border: "none",
                      }}
                    />
                  )}
                  {/*icon*/}
                  {/* </button> */}
                  {/* <button className="sidebar-head-btn" onClick={showSidebar}>=</button> */}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              overflowY: "auto",
              // , display: 'flex'
              // , flexDirection: 'column'
              // , marginTop: '64px'
            }}
          >
            <div>
              <div
                className="arrowDiv"
                style={{
                  margin: sidebar ? "32px 24px 10px 0" : "0 24px 10px 0",
                }}
              >
                <Button
                  text={<ArrowBackIcon />}
                  style={{
                    backgroundColor: "#01396b !important",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 1)",
                  }}
                />
                {/* <ArrowBackIcon /> */}
              </div>
              {dropDownData.map((item, index) => {
                return <SubMenu item={item} key={index} sidebar={sidebar} />;
              })}
            </div>
            <div
            // style={{ marginTop: '500px' }}
            // style={{ position: 'fixed' }}
            >
              <div className="Footer">
                <div className="drawerfooter">
                  © Laminaar Aviation Infotech Pte.Ltd.,Singapore/ 2016~2025.
                  <br /> All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav"
        style={{
          width: showHeader ? `calc(100% - 280px)` : `calc(100% - 64px)`,
          //   marginLeft: sidebar ? "280px" : "64px",
        }}
      >
        <Header />

        <Outlet />
        {/* <Navbar /> */}
        <AgGridTable />
      </div>
    </div>
  );
};

export default Sidebar;
