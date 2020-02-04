import React from "react";
import { connect } from "react-redux";
import Log from "../../components/Auth/Log";
import AdminPanel from "../../components/AdminPanel";

const Admin = ({ isSignIn }) => {

  return (
    <main className="admin-panel">
      {/* {isSignIn?<h1>Hello fomr Admin panel!</h1>:<Log />} */}
      <AdminPanel/>
    </main>
  );
};

const mapStateToProps = state => ({
  isSignIn: state.admin.isSignIn
});
export default connect(mapStateToProps)(Admin);
