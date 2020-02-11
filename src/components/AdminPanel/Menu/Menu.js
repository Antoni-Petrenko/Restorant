import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPizzaMenu,
  setPizza
} from "../../../store/actions/actionAdminPanel";
import MenuItem from "./MenuItem";
import CreateMenuItem from "./CreateMenuItem";
import { SearchBar } from "./SearchBar";

class Menu extends Component {
  state = {
    filterWord: ""
  };

  async componentDidMount() {
    const url = this.props.match.url;
    await this.props.fetchMenu(url);
    this.setState((prevState, props) => ({
      pizza: { ...props.menu },
      ...prevState
    }));
  }

  handleTouched = () => {
    this.setState({ isChanged: true });
  };

  handleFormSubmit = (menuTitle, newItem, e) => {
    e.preventDefault();
    this.setState(prevState => {
      const copyState = { ...prevState.pizza };
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
      const id = `${prevState.pizza[menuTitle].length + 1}${menuTitle}${
        newItem.name
      }`;
      newItem.id = id;
      const copyState = { ...prevState.pizza };
      copyState[menuTitle].push(newItem);
      return copyState;
    }, this.handleTouched);
  };

  handleDeleteElement = (menuTitle, id, e) => {
    e.preventDefault();
    this.setState(prevState => {
      const copyState = { ...prevState.pizza };
      copyState[menuTitle].find((item, index, arr) => {
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
    const url = this.props.match.url;
    this.props.setPizzaMenu(this.state.pizza, url);
    this.setState({ isChanged: false });
    this.props.fetchMenu(url);
  };
  handleSearchBar = e => {
    e.preventDefault();
    this.setState({ filterWord: e.target.value });
  };

  render() {
    const { pizza } = this.state;
    const menuSection = pizza ? Object.keys(pizza) : [];
    return (
      <section className="admin-menu">
        <SearchBar filterWord={this.state.filterWord} handleSearchBar={this.handleSearchBar} />
        {menuSection.map(menuTitle => (
          <fieldset key={menuTitle}>
            <legend>{menuTitle}</legend>
            {pizza[menuTitle]
              .filter(item => item.ing.includes(this.state.filterWord))
              .map((item, index) => (
                <MenuItem
                  key={item.id}
                  {...item}
                  handleFormSubmit={this.handleFormSubmit.bind(this, menuTitle)}
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

const mapStateToProps = state => ({
  menu: state.admin.pizzaMenu
});
const mapDispatchToProps = dispatch => ({
  fetchMenu: url => dispatch(fetchPizzaMenu(url)),
  setPizzaMenu: (menu, url) => dispatch(setPizza(menu, url))
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
