import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../../store/actions/actionMenu";
import { useRouteMatch } from "react-router-dom";
import { SwitchMenuNav } from "./SwitchMenuNav";
import Loader from "../Loader";
import "./styles.scss";


const Menu = ({ pizza, drinks, isLoad, fetchMenu }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    fetchMenu(url);
  }, []);

  return isLoad ? (
    <SwitchMenuNav
      url={url}
      firstProduct={pizza}
      firstProductName="pizza"
      secProduct={drinks}
      secProductName="drinks"
    />
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
