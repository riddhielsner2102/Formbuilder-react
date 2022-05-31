import React, { useState } from "react";

const SubMenu = ({ item, sidebar }) => {
  // console.log('sidebar', sidebar)
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div style={{ backgroundColor: sidebar ? (subnav ? 'lightgray' : 'white') : 'white' }}>

      <div className="sidebarLink" onClick={showSubnav}>
        <div style={{ display: "flex", alignItems: 'center' }}>
          {item.icon}
          {sidebar && <span style={{ marginLeft: "16px" }}>{item.title}</span>}
        </div>
        <div>
          {sidebar &&
            (subnav ? item.iconOpened : item.subNav ? item.iconClosed : null)}
        </div>
      </div>
      {sidebar &&
        subnav &&
        item.subNav?.map((items, index) => {
          return (
            // <Link to="/maincontent/extra">
            <div className="dropdownLink" key={index}>
              {item.subIcon ? item.subIcon : items.icon}
              <div style={{ marginLeft: "16px" }}>{items.ShortName}</div>
            </div>
            // </Link>
          );
        })}
    </div>
  );
};

export default SubMenu;