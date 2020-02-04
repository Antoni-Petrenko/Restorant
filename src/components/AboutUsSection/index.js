import { AboutUs } from "./AboutUs";
import { connect } from "react-redux";
import "./styles.scss";

const mapStateToProps = state => ({
  heading: state.page.aboutUs.heading,
  paragraph: state.page.aboutUs.paragraph
});

export default connect(mapStateToProps)(AboutUs);
