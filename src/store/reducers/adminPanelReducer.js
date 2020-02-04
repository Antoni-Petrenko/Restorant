import * as actionTypes from "../actions/actionAdminPanel";

const initState = {
  isSignIn: false,
  error: "",
  user: {},
  isLoad: true,
  pageContent: {},
  menuContent: {}
};
export default function admin(state = initState, action) {
  switch (action.type) {
    case actionTypes.START_SIGN_IN:
      return {
        ...state,
        isSignIn: false,
        isLoad: false,
        error: ""
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        user: { ...action.payload.user },
        isSignIn: true,
        error: "",
        isLoad: true
      };
    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        isSignIn: false,
        isLoad: true
      };
    case actionTypes.ADMIN_FETCH_PAGE_BEGIN:
      return {
        ...state
      };
    case actionTypes.ADMIN_FETCH_PAGE_SUCCESS:
      
      return {
        ...state,
        pageContent: action.payload
      };
    case actionTypes.ADMIN_FETCH_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return {
        ...state,
        isSignIn: false
      };
  }
}
