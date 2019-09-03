import { QUOTE_SUCCESS, QUOTE_ERROR, QUOTE_FETCH } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  quote: { text: "", author: {} }
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUOTE_FETCH:
      return { ...state, loading: true };
    case QUOTE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case QUOTE_SUCCESS:
      return { ...state, loading: false, quote: action.payload, error: null };
    default:
      return state;
  }
};

export default quoteReducer;
