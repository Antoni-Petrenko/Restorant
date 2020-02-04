import React, { useState } from "react";
import { signIn } from "../../store/actions/actionAdminPanel";
import { connect } from "react-redux";
import "./styles.scss";

const Log = ({ signIn, error, isLoad }) => {
  const initState = { email: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(initState);

  const handlers = {
    input: e => {
      const copyLoginCredentials = { ...loginCredentials };
      copyLoginCredentials[e.target.name] = e.target.value;
      setLoginCredentials(copyLoginCredentials);
    },
    submit: e => {
      e.preventDefault();
      signIn({ ...loginCredentials });
      setLoginCredentials(initState);
    }
  };

  return (
    <div className="LogIn">
      <form onSubmit={handlers.submit} className="LogIn__form">
        <label htmlFor="">
          <span>E-mail:</span>
          <input
            className={error.includes("There is no user") ? "error" : ""}
            type="email"
            name="email"
            placeholder={
              error.includes("There is no user") ? "Niepoprawny e-mail" : ""
            }
            onChange={handlers.input}
            value={loginCredentials.email}
            required
          />
        </label>
        <label htmlFor="">
          <span>Password:</span>
          <input
            type="password"
            className={error.includes("password") ? "error" : ""}
            placeholder={error.includes("password") ? "Niepoprawne hasło" : ""}
            name="password"
            onChange={handlers.input}
            value={loginCredentials.password}
            required
          />
        </label>
        <button disabled={!isLoad} className="button LogIn__form--button">
          Zaloguj
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.admin.error,
  isLoad: state.admin.isLoad
});
const mapDispatchToProps = dispatch => ({
  signIn: loginCredentials =>
    dispatch(signIn(loginCredentials.email, loginCredentials.password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
