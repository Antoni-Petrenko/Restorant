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
    this.setState((prevState, props) => ({
      ...props.drinks,
      isChanged: false
    }));
  }

  handleTouched = () => {
    this.setState({ isChanged: true });
  };

  handleFormSubmit = (menuTitle, newItem, e) => {
    e.preventDefault();
    this.setState(prevState => {
      const copyState = { ...prevState.drinks };
      copyState[menuTitle].find((item, index, arr) => {
        if (item.id === newItem.id) {
          arr[index] = newItem;
          return true;
        }
        return false;
      });
      return copyState;
    }, this.handleTouched);
  };

  handleAddNewItem = (menuTitle, newItem, e) => {
    e.preventDefault();
    this.setState(prevState => {
      const id = `${prevState.drinks[menuTitle].length + 1}${menuTitle}${
        newItem.name
      }`;
      newItem.id = id;
      const copyState = { ...prevState.drinks };
      copyState[menuTitle].push(newItem);
      return { drinks: copyState };
    }, this.handleTouched);
  };

  handleDeleteElement = (menuTitle, id, e) => {
    e.preventDefault();
    this.setState(prevState => {
      const copyState = { ...prevState };
      copyState.drinks[menuTitle].find((item, index, arr) => {
        if (item.id === id) {
          arr.splice(index, 1);
          return true;
        }
        return false;
      });
      return copyState;
    }, this.handleTouched);
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
                key={item.id}
                {...item}
                handleFormSubmit={this.handleFormSubmit.bind(
                  this,
                  menuTitle,
                  index
                )}
                handleDeletElement={this.handleDeleteElement.bind(
                  this,
                  menuTitle
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
