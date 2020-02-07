import firebase from "../../Firebase";
export const FETCH_MENU_BEGIN = "FETCH_MENU_BEGIN";
export const FETCH_PIZZA_SUCCESS = "FETCH_PIZZA_SUCCESS";
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS";
export const FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE";

const fetchingMenuBegin = () => ({
  type: FETCH_MENU_BEGIN
});
const fetchingPizzaSuccess = data => ({
  type: FETCH_PIZZA_SUCCESS,
  payload: data
});
const fetchingDrinksSuccess = data => ({
  type: FETCH_DRINKS_SUCCESS,
  payload: data
});

const fetchingMenuFailure = e => ({
  type: FETCH_MENU_FAILURE,
  payload: e
});

export function fetchMenu(address) {
  return async dispatch => {
    try {
      dispatch(fetchingMenuBegin());
      const url = address.includes("glutenfree")
        ? "pl/menu/pizza/glutenfree"
        : "pl/menu/pizza/regular";

      firebase.dataBase.doc("pl/menu").onSnapshot(doc => {
        dispatch(fetchingDrinksSuccess({ ...doc.data() }));
      });
      firebase.dataBase.doc(url).onSnapshot(doc => {
        dispatch(fetchingPizzaSuccess({ ...doc.data() }));
      });
    } catch (e) {
      dispatch(fetchingMenuFailure(e));
    }
  };
}
