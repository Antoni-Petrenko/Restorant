import {
  FETCH_MENU_BEGIN,
  FETCH_PIZZA_SUCCESS,
  FETCH_DRINKS_SUCCESS,
  FETCH_MENU_FAILURE
} from "../actions/actionMenu";

const initState = {
  pizza: {},
  drinks: {drinks:{}},
  error: "",
  isLoad: false
};

export default function menu(state = initState, action) {
  switch (action.type) {
    case FETCH_MENU_BEGIN:
      return {
        ...state,
        isLoad: false
      };
    case FETCH_PIZZA_SUCCESS:
      return {
        ...state,
        pizza: action.payload,
        isLoad: true
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.payload.drinks,
        isLoad: true
      };
    case FETCH_MENU_FAILURE:
      return {
        ...state,
        isLoad: false,
        error: action.payload
      };
    default:
      return { ...state };
  }
}
