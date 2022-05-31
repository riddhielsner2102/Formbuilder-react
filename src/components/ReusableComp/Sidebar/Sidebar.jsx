import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import "./Sidebar.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LogoImage from "../../assets/images/logos/ARMS2.5-2 - Copy (2).png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Button } from "arms_v2.8_webui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FilterVintageOutlinedIcon from "@mui/icons-material/FilterVintageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import { Outlet } from "react-router-dom";
import { PrepareRequest, requests } from "../../../Service/getRequests";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const handleDrawerOpen = () => {
    setSidebar(true);
    setShowHeader(true);
  };
  const handleDrawerClose = () => {
    setSidebar(false);
    setShowHeader(false);
  };

  const [sidebarData, setSidebarData] = useState([]);
  useEffect(async () => {
    const UserID = sessionStorage.getItem("UserID");
    const URL = `${requests.getTemplateUserMapping}?UserID=${UserID}`;
    const response = await PrepareRequest(URL);
    setSidebarData(response.data);
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
      subIcon: <DifferenceOutlinedIcon />,
    },
    {
      id: 2,
      title: "Admin",
      icon: <AccountCircleOutlinedIcon />,
      iconClosed: <ChevronRightIcon />,
      iconOpened: <KeyboardArrowDownIcon />,
      subNav: [
        {
          ShortName: "Permission Settings",
          // path: "/events/events1",
          icon: <FilterVintageOutlinedIcon />,
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "1 1 0%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className={sidebar ? "show sidebarNav" : "hide sidebarNav"}
        onMouseEnter={() => setSidebar(true)}
        onMouseLeave={() => {
          if (showHeader) {
            setSidebar(true);
          } else {
            setSidebar(false);
          }
        }}
      >
        <div style={{ width: "100%", position: "relative", overflowY: "auto" }}>
          <div
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
                <div className="demo">
                  {sidebar && (
                    <div
                      className="sidebar-head-btn headerIcondashboard"
                      onClick={
                        showHeader ? handleDrawerClose : handleDrawerOpen
                      }
                    >
                      <MenuOutlinedIcon />
                    </div>
                  )}
                  <div
                    className="sidebar-head-btn headerIcon"
                    onClick={handleDrawerClose}
                  >
                    <ArrowBackIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sidebarScroll" style={{ overflowY: "auto" }}>
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
              </div>

              {dropDownData.map((item, index) => {
                return <SubMenu item={item} key={index} sidebar={sidebar} />;
              })}
            </div>
            <div>
              <div
                className={
                  sidebar ? "show Footer" : "hide Footer displayFooter"
                }
              >
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
        className={
          showHeader ? "trueHead headerWidth nav" : "falseHead headerWidth nav"
        }
      >
        <Header handleDrawerOpen={handleDrawerOpen} />
        <Outlet />
        {/* <AgGridTable /> */}
      </div>
    </div>
  );
};

export default Sidebar;
