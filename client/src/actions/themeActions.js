import { SWITCH_THEME } from "./types";

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: theme
});
