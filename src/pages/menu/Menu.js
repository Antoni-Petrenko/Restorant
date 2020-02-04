import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Question1 from "../../components/Question/Question1";
import Question2 from "../../components/Question/Question2";
import Menu from "../../components/Menu/Menu";

import "./styles.scss";
const MenuPage = () => {
  return (
    <main className="menu-main">
      <Route exact path="/menu">
        {({ match, ...props }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="qestion"
            unmountOnExit
          >
            <Question1 {...props} />
          </CSSTransition>
        )}
      </Route>

      <Route path="/menu/:id" component={Menu} />
    </main>
  );
};

export default MenuPage;
