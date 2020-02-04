import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";
import "./styles.scss";

const Navigation = () => {
  const [isActive, setActivity] = useState(false);
  const handleClick = () => {
    setActivity(state => !state);
  };
  return (
    <NavBar isActive={isActive} handleClick={handleClick}>
      <Nav>
        {[
          { name: "Home", link: "/" },
          { name: "Menu", link: "/menu" },
          { name: "Admin", link: "/admin-panel" }
        ].map((item, index) => (
          <NavItem
            key={item.name + index}
            name={item.name}
            link={item.link}
            handleClick={handleClick}
          />
        ))}
      </Nav>
    </NavBar>
  );
};

export default Navigation;
