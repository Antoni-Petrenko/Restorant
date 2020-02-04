import {
  FETCH_MENU_BEGIN,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from "../actions/actionMenu";

const initState = {
  pizza: {},
  drinks: [],
  error: "",
  isLoad: false
};

export default function menu(state = initState, action) {
  switch (action.type) {
    case FETCH_MENU_BEGIN:
      return{
        ...state,
        isLoad:false
      }
    case FETCH_MENU_SUCCESS:
      return{
        pizza:action.payload.pizza,
        drinks:action.payload.drinks.drinks,
        isLoad:true
      }  
    case FETCH_MENU_FAILURE:
      return{
        ...state,
        isLoad:false,
        error:action.payload
      }  
    default:
      return { ...state };
  }
}
