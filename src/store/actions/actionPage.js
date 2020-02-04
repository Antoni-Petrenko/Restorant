import firebase from "../../Firebase";
export const FETCH_PAGE_BEGIN = "FETCH_PAGE_BEGIN";
export const FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS";
export const FETCH_PAGE_FAILURE = "FETCH_PAGE_FAILURE";





const fetchPageBegin = () => ({
  type: FETCH_PAGE_BEGIN
});

const fetchPageSuccess = data => ({
  type: FETCH_PAGE_SUCCESS,
  payload: { ...data }
});

const fetchPageFailure = error => ({
  type: FETCH_PAGE_FAILURE,
  payload: error
});

export function fetchPage() {
  return async dispatch => {
    try{
      dispatch(fetchPageBegin());
      const querySnapshot = await firebase.dataBase.doc('pl/page').get();
      const data=querySnapshot.data();
      dispatch(fetchPageSuccess(data))
    }catch(e){
      dispatch(fetchPageFailure(e))
    }
  };
}
