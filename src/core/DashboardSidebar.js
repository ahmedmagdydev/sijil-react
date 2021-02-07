import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const SideBar = styled.div`
  background-color: #083258;
  background: linear-gradient(#083258, #225280);
  width: 220px;
  position: fixed;
  height: 100%;
  @media (max-width: 910px) {
    width: 20px;
  }
  .logo {
    width: 100px;
  }
`;
function DashboardSidebar() {
  return (
    <SideBar className="p-4  ">
      <img src="logo.png" className="logo" alt="" />
      <Navigation />
    </SideBar>
  );
}

export default DashboardSidebar;
