import * as actionTypes from "../actions/actionAdminPanel";

const initState = {
  isSignIn: false,
  error: "",
  user: {},
  isLoad: true,
  pageContent: {},
  drinksMenu: {},
  regularPizzaMenu: {},
  glutenfreePizzaMenu: {}
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
        ...state,
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
    case actionTypes.ADMIN_START_FATCHING_DRINKS:
      return {
        ...state
      };
    case actionTypes.ADMIN_FATCHING_DRINKS_SUCCESS:
      return {
        ...state,
        drinksMenu: action.payload
      };
    case actionTypes.ADMIN_FATCHING_DRINKS_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    case actionTypes.ADMIN_START_SENDING_DRINKS_MENU:
      return {
        ...state
      };
    case actionTypes.ADMIN_SENDING_DRINKS_MENU_SUCCESS:
      return {
        ...state
      };
    case actionTypes.ADMIN_SENDING_DRINKS_MENU_FAILURE:
      return {
        ...state,
        error:action.payload.message
      };

    default:
      return {
        ...state,
        isSignIn: false
      };
  }
}
