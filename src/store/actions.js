import * as types from "./type.js";
export const actionsConsole = ({ commit }, val) => {
  console.log(val,'val');
  commit(types.CONSOLE_TEXT, val);
};

