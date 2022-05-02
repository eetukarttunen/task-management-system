
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList} from "react-icons/fa";
import { FiHome} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          
          <div className="logotext">
              <p>Task Management</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>Add tasks</MenuItem>
              <MenuItem icon={<FaList />}>Overview</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;