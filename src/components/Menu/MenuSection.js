import React from "react";
import {MenuItem} from "./MenuItem";
import { Link, useRouteMatch } from "react-router-dom";


const MenuSection = ({menu}) => {
  const{url} =useRouteMatch();
  return (
    <ul className={"menu"}>
      <MenuItem title={menu} />
      {url.includes('glutenfree/pizza')&&<h2>Gluten free</h2>}
      <Link className="menu__button--back" to="/menu">
        Wróć
      </Link>
    </ul>
  );
};

export { MenuSection };
