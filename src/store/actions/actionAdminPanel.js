import firebase from "../../Firebase";
export const ADMIN_START_FATCHING_DRINKS = "ADMIN_START_FETCHING_DRINKS";
export const ADMIN_FATCHING_DRINKS_SUCCESS = "ADMIN_FATCHING_DRINKS_SUCCESS";
export const ADMIN_FATCHING_DRINKS_FAILURE = "ADMIN_FATCHING_DRINKS_FAILURE";
export const ADMIN_START_SENDING_DRINKS_MENU =
  "ADMIN_START_SENDING_DRINKS_MENU";
export const ADMIN_SENDING_DRINKS_MENU_SUCCESS =
  "ADMIN_SENDING_DRINKS_MENU_SUCCESS";
export const ADMIN_SENDING_DRINKS_MENU_FAILURE =
  "ADMIN_SENDING_DRINKS_MENU_FAILURE";

export const START_SIGN_IN = "START_SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

const startSignIn = () => ({
  type: START_SIGN_IN
});

const signInSuccess = signedUser => ({
  type: SIGN_IN_SUCCESS,
  payload: signedUser
});

const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export function signIn(email, password) {
  return dispatch => {
    try {
      dispatch(startSignIn());
      firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(signedUser => {
          dispatch(signInSuccess(signedUser));
        })
        .catch(e => dispatch(signInFailure(e)));
    } catch (e) {
      dispatch(signInFailure(e));
    }
  };
}
const startFetchingDrinks = () => ({
  type: ADMIN_START_FATCHING_DRINKS
});
const fetchingMenuSuccess = data => ({
  type: ADMIN_FATCHING_DRINKS_SUCCESS,
  payload: data
});
const fetchingMenuFailure = error => ({
  type: ADMIN_FATCHING_DRINKS_FAILURE,
  payload: error
});

export function fetchDrinks() {
  return async dispatch => {
    try {
      dispatch(startFetchingDrinks());
      const querySnapshotDrinks = await firebase.dataBase.doc("pl/menu").get();
      const data = querySnapshotDrinks.data();
      dispatch(fetchingMenuSuccess(data));
    } catch (e) {
      dispatch(fetchingMenuFailure(e));
    }
  };
}

const startSendingDrinksMenu = () => ({
  type: ADMIN_START_SENDING_DRINKS_MENU
});
const sendingDrinksMenuSuccess = () => ({
  type: ADMIN_SENDING_DRINKS_MENU_SUCCESS
});
const sendingDrinksMenuFailure = error => ({
  type: ADMIN_SENDING_DRINKS_MENU_FAILURE,
  payload: error
});

export function setDrinks(menu) {
  return async dispatch => {
    try {
      dispatch(startSendingDrinksMenu());
      await firebase.dataBase.doc("pl/menu").set({ drinks: menu });
      dispatch(sendingDrinksMenuSuccess());
    } catch (e) {
      dispatch(sendingDrinksMenuFailure(e));
    }
  };
}
