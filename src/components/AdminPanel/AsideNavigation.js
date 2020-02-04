import React from "react";
import { FaPizzaSlice, FaCoffee, FaList } from "react-icons/fa";
import { NavLink, useRouteMatch } from "react-router-dom";

const AsideNavigation = () => {
  const { url } = useRouteMatch();

  return (
    <aside className="admin-panel__navigation">
      <nav>
        <ul className="admin-panel__navigation-list">
          <li>
            <NavLink
              className="admin-panel__navigation-link"
              to={`${url}/pizza-menu`}
            >
              <FaPizzaSlice />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin-panel__navigation-link"
              to={`${url}/bar-menu`}
            >
              <FaCoffee />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="admin-panel__navigation-link"
              to={`${url}/page-info`}
            >
              <FaList />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { AsideNavigation };
