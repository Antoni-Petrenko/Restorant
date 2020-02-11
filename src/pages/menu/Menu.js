import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Question1 from "../../components/Question/Question1";
import Menu from "../../components/Menu/Menu";
import "./styles.scss";
const MenuPage = () => {
  return (
    <main className="menu-main">
      <Route exact path="/menu">
        {({ match}) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="question"
            unmountOnExit
          >
            <Question1 />
          </CSSTransition>
        )}
      </Route>

      <Route path="/menu/:id" component={Menu} />
    </main>
  );
};

export default MenuPage;
