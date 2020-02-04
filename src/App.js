import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import MenuPage from "./pages/menu/Menu";
import Page404 from "./pages/404/Page404";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { HomeHeader, AdminHeader, MenuHeader } from "./components/Header";
import { fetchPage } from "./store/actions/actionPage";
import Loader from "./components/Loader";


class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    return (
      this.props.isLoad ? (
        <div className="wrapper">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomeHeader} />
            <Route path="/menu" component={MenuHeader} />
            <Route path="/admin-panel" component={AdminHeader} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/admin-panel" component={Admin} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      ):<Loader/>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(fetchPage())
  };
};
const mapStateToProps = state => {
  return {
    isLoad: state.page.isLoad
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
