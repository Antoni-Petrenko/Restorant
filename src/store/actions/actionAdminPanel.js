import firebase from "../../Firebase";
export const ADMIN_FETCH_PAGE_BEGIN = "ADMIN_FETCH_PAGE_BEGIN";
export const ADMIN_FETCH_PAGE_SUCCESS = "ADMIN_FETCH_PAGE_SUCCESS";
export const ADMIN_FETCH_PAGE_FAILURE = "ADMIN_FETCH_PAGE_FAILURE";
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

export function fetchMenu() {
  return async dispatch => {
    try {
    } catch (e) {}
  };
}

const fetchPageBegin = () => ({
  type: ADMIN_FETCH_PAGE_BEGIN
});

const fetchPageSuccess = data => ({
  type: ADMIN_FETCH_PAGE_SUCCESS,
  payload: { ...data }
});

const fetchPageFailure = error => ({
  type: ADMIN_FETCH_PAGE_FAILURE,
  payload: error
});

export function fetchPageContent() {
  return async dispatch => {
    try {
      dispatch(fetchPageBegin());
      const querySnapshot = await firebase.dataBase.doc("pl/page").get();
      const data = querySnapshot.data();
      
      dispatch(fetchPageSuccess(data));
    } catch (e) {
      dispatch(fetchPageFailure(e));
    }
  };
}
