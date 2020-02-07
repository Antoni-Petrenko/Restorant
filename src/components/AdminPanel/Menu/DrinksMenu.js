import React, { Component } from "react";
import {
  fetchDrinks,
  setDrinks
} from "../../../store/actions/actionAdminPanel";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import CreateMenuItem from "./CreateMenuItem";

class DrinksMenu extends Component {
  state = {};
  async componentDidMount() {
    await this.props.fetchDrinksMenu();
    const newState = { ...this.props.drinks };
    newState.isChanged = false;
    this.setState({ ...newState });
  }

  handleTouched = () => {
    this.setState({ isChanged: true });
  };

  handleFormSubmit = (menuTitle, id, newItem, e) => {
    e.preventDefault();
    const copyState = { ...this.state };
    copyState.drinks[menuTitle][id] = newItem;
    this.setState(copyState);
    this.handleTouched();
  };

  handleAddNewItem = (menuTitle, newItem, e) => {
    e.preventDefault();
    this.handleTouched();
    const copyState = { ...this.state };
    copyState.drinks[menuTitle].push(newItem);
    this.setState(copyState);
    this.handleTouched();
  };

  handleDeleteElement = (menuTitle, id, e) => {
    e.preventDefault();
    const copyState = { ...this.state };
    copyState.drinks[menuTitle].splice(id, 1);
    this.setState(copyState);
    this.handleTouched();
  };

  handleSendChanges = e => {
    e.preventDefault();
    this.props.setDrinksMenu(this.state.drinks);
    this.setState({ isChanged: false });
    this.props.fetchDrinksMenu();
  };

  render() {
    const { drinks } = this.state;
    const menuSection = drinks ? Object.keys(drinks) : [];
    return (
      <section className="admin-menu">
        {menuSection.map(menuTitle => (
          <fieldset key={menuTitle}>
            <legend>{menuTitle}</legend>
            {drinks[menuTitle].map((item, index) => (
              <MenuItem
                key={menuTitle + item.name + index}
                {...item}
                handleFormSubmit={this.handleFormSubmit.bind(
                  this,
                  menuTitle,
                  index
                )}
                handleDeletElement={this.handleDeleteElement.bind(
                  this,
                  menuTitle,
                  index
                )}
                handleTouched={this.handleTouched}
              />
            ))}

            <CreateMenuItem
              handleAddNewItem={this.handleAddNewItem.bind(this, menuTitle)}
            />

            <button
              disabled={!this.state.isChanged}
              className="send-menu-button"
              onClick={this.handleSendChanges}
            >
              Wyślij
            </button>
          </fieldset>
        ))}
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchDrinksMenu: () => dispatch(fetchDrinks()),
  setDrinksMenu: menu => dispatch(setDrinks(menu))
});
const mapStateToProps = state => ({
  drinks: state.admin.drinksMenu,
  isLoad: state.admin.isLoad
});
export default connect(mapStateToProps, mapDispatchToProps)(DrinksMenu);
