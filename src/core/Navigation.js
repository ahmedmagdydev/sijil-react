import React from "react";

function Navigation() {
  function handleClick(url) {}
  return (
    <ul className="list-unstyled mt-4 navigation">
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
    </ul>
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
