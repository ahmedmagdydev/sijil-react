import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';

const SideBar = styled.div`
  background-color: #083258;
  background: linear-gradient(#083258, #225280);
  width: 220px;
  position: fixed;
  height: 100%;
  border-radius: ${(props) => (props.lang == 'en' ? '0 20px 20px 0' : '20px 0 0 20px')};

  .btn.menu {
    display: none;
    position: absolute;
    right: ${(props) => (props.lang == 'en' ? 'auto' : '98%')};
    left: ${(props) => (props.lang == 'en' ? '98%' : 'auto')};
    background: #09345a;
    color: #fff;
  }
  @media (max-width: 910px) {
    .btn.menu {
      display: block;
    }
    &.active {
      transform: translateX(0);
    }
    z-index: 1000;

    transform: ${(props) => (props.lang == 'en' ? 'translateX(-220px)' : 'translateX(220px)')};
    transition: 0.2s linear;
  }
  .logo {
    width: 100px;
  }
`;
function DashboardSidebar({ lang }) {
  const [showMenu, setShowMenu] = useState(false);
  console.log(`🚀 ~ file: DashboardSidebar.js ~ line 34 ~ showMenu`, showMenu);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <SideBar className={'p-4 ' + (showMenu ? 'active' : null)} lang={lang}>
      <Button className="menu" variant="link" onClick={toggleMenu}>
        <i className={'fa fa-' + (showMenu ? 'close' : 'bars')}></i>
      </Button>
      <img src="logo.png" className="logo" alt="" />
      <Navigation />
    </SideBar>
  );
}

export default DashboardSidebar;
