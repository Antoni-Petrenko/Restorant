import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPizzaMenu, setPizza} from "../../../store/actions/actionAdminPanel";
import MenuItem from "./MenuItem";
import CreateMenuItem from "./CreateMenuItem";

class Menu extends Component {
  state = {};
  async componentDidMount() {
    const url = this.props.match.url;
    await this.props.fetchMenu(url);
    const newState = { pizza: { ...this.props.menu } };
    newState.isChanged = false;
    this.setState(newState);
  }

  handleTouched = () => {
    this.setState({ isChanged: true });
  };

  handleFormSubmit = (menuTitle, id, newItem, e) => {
    e.preventDefault();
    const copyState = { ...this.state };
    copyState.pizza[menuTitle][id] = newItem;
    this.setState(copyState);
    this.handleTouched();
  };

  handleAddNewItem = (menuTitle, newItem, e) => {
    e.preventDefault();
    this.handleTouched();
    const copyState = { ...this.state };
    copyState.pizza[menuTitle].push(newItem);
    this.setState(copyState);
    this.handleTouched();
  };

  handleDeleteElement = (menuTitle, id, e) => {
    e.preventDefault();
    const copyState = { ...this.state };
    copyState.pizza[menuTitle].splice(id, 1);
    this.setState(copyState);
    this.handleTouched();
  };

  handleSendChanges = e => {
    e.preventDefault();
    const url = this.props.match.url;
    this.props.setPizzaMenu(this.state.pizza, url);
    this.setState({ isChanged: false });
    this.props.fetchMenu(url);
  };
  render() {
    const { pizza } = this.state;
    const menuSection = pizza ? Object.keys(pizza) : [];
    return (
      <section className="admin-menu">
        {menuSection.map(menuTitle => (
          <fieldset key={menuTitle}>
            <legend>{menuTitle}</legend>
            {pizza[menuTitle].map((item, index) => (
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

const mapStateToProps = state => ({
  menu: state.admin.pizzaMenu
});
const mapDispatchToProps = dispatch => ({
  fetchMenu: url => dispatch(fetchPizzaMenu(url)),
  setPizzaMenu:(menu,url)=>dispatch(setPizza(menu,url))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
