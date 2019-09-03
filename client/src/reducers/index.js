import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import quoteReducer from "./quoteReducer";

export default combineReducers({
  test: () => 5,
  theme: themeReducer,
  quote: quoteReducer
});
