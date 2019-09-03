import { SWITCH_THEME } from "../actions/types";

const initialState = "main";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
