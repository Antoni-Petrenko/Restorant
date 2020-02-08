import React from "react";
import { connect } from "react-redux";
import Log from "../../components/Auth/Log";
import AdminPanel from "../../components/AdminPanel";

const Admin = ({ iuserID }) => {
  return (
    <main className="admin-panel">
      {iuserID.length ? <AdminPanel /> : <Log />}
    </main>
  );
};

const mapStateToProps = state => ({
  iuserID: state.admin.user
});
export default connect(mapStateToProps)(Admin);
