import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../../store/actions/actionMenu";
import {
  Route,
  NavLink,
  Link,
  useLocation,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { MenuItem } from "./MenuItem";
import Loader from "../Loader";
import "./styles.scss";

const Menu = ({ pizza, drinks, isLoad, fetchMenu }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    fetchMenu(url);
  }, []);
  return isLoad ? (
    <>
      <nav className={"menu-navigation"}>
        <NavLink className={"menu-navigation__button"} to={`${url}/pizza`}>
          Pizza
        </NavLink>
        <NavLink className={"menu-navigation__button"} to={`${url}/drinks`}>
          Drinks
        </NavLink>
      </nav>

      <Route
        path={`${url}/pizza`}
        component={() => (
          <ul className={"menu"}>
            {Object.keys(pizza).length ? (
              <>
                <MenuItem title={pizza} />
                <Link className="button" to="/menu">
                  Wróć
                </Link>
              </>
            ) : (
              <Link className="button--back" to="/menu">
                Wróć
              </Link>
            )}
          </ul>
        )}
      />
      <Route
        path={`${url}/drinks`}
        component={() => (
          <ul className={"menu"}>
            <MenuItem title={drinks} />
            <Link className="button" to="/menu">
              Wróć
            </Link>
          </ul>
        )}
      />
    </>
  ) : (
    <Loader />
  );
};
const mapStateToProps = state => ({
  pizza: state.menu.pizza,
  drinks: state.menu.drinks,
  isLoad: state.menu.isLoad
});
const mapDispatchToProps = dispatch => ({
  fetchMenu: address => dispatch(fetchMenu(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
