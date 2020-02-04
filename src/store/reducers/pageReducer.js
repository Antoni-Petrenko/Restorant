import {
  FETCH_PAGE_BEGIN,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} from "../actions/actionPage";

const initState = {
  aboutUs: {},
  navigation: [],
  slides: [],
  contact: {},
  error: "",
  isLoad: false
};

export default function page(state = initState, action) {
  switch (action.type) {
    case FETCH_PAGE_BEGIN:
      return { ...state };

    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        aboutUs:action.payload.aboutUs,
        slides:action.payload.slides,
        isLoad: true
      };
    case FETCH_PAGE_FAILURE:
      return {
        ...state,
        isLoad: false
      };
    default:
      return {
        ...state
      };
  }
}
