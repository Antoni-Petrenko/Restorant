import appAPI from "../../Firebase";
export const FETCH_MENU_BEGIN = "FETCH_MENU_BEGIN";
export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE";

const fetchingMenuBegin = () => ({
  type: FETCH_MENU_BEGIN
});
const fetchingMenuSuccess = data => ({
  type: FETCH_MENU_SUCCESS,
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
     
      const querySnapshotDrinks = await appAPI.dataBase.doc("pl/menu").get();
      const querySnapshotPizza = await appAPI.dataBase.doc(url).get();

      const data = {
        pizza: querySnapshotPizza.data() || {},
        drinks: querySnapshotDrinks.data() || {}
      };
      dispatch(fetchingMenuSuccess(data));
    } catch (e) {
      dispatch(fetchingMenuFailure(e));
    }
  };
}
