import React from "react";
import { connect } from "react-redux";
import Log from "../../components/Auth/Log";
import AdminPanel from "../../components/AdminPanel";

const Admin = ({ iuserID }) => {
  const checkScreenSize = () => {
    if (window.innerWidth > 767) {
      return <>{iuserID.length ? <AdminPanel /> : <Log />}</>;
    } else {
      return (
        <h2 className="message">
          Minimalna zalecana szerokość ekranu dla korzystania z paneli
          administratora ma wynosić 767 px! Proszę wejdź z laptopa,tabletu lub
          komputeru stacjonarnego .
        </h2>
      );
    }
  };
  return <main className="admin-panel">{checkScreenSize()}</main>;
};

const mapStateToProps = state => ({
  iuserID: state.admin.user
});
export default connect(mapStateToProps)(Admin);
