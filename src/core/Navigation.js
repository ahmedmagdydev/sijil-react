import React from "react";
import styled from "styled-components";
const NavigationStyle = styled.ul`
  a {
    height: 30px;
    border-radius: 9px;
    padding: 3px 40px;
    margin-top: 15px;
    color: #9dc1e5;
    position: relative;
    &:hover,
    &.active {
      background-color: #274d72;
      text-decoration: none;
    }
  }

  i.fa {
    display: inline-block;
    height: 30px;
    position: absolute;
    left: 0;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
  }
  li a.active i.fa {
    background-color: #00b3de;
    color: #fff;
    border-radius: 9px;
  }
`;
function Navigation() {
  return (
    <NavigationStyle className="list-unstyled mt-4 navigation">
      {navigationList.map((item) => {
        return (
          <li key={item.title}>
            <a
              href={item.url}
              className={`d-block ${item.active ? "active" : ""}`}
            >
              <i className={"fa fa-" + item.icon}></i>
              {item.title}
            </a>
          </li>
        );
      })}
    </NavigationStyle>
  );
}
const navigationList = [
  {
    title: "home",
    url: "home",
    icon: "home",
    active: true,
  },
  {
    title: "profile",
    url: "profile",
    icon: "user",
  },
  {
    title: "search",
    url: "search",
    icon: "search",
  },
];
export default Navigation;
