import { action } from "../../helpers";

export const CHANGE_CHECKBOX = {
  DONE: "CHANGE_CHECKBOX_DONE",
  NOT_DONE: "CHANGE_CHECKBOX_NOT_DONE"
};

export const checkBox = {
  done: task => action(CHANGE_CHECKBOX.DONE, { task }),
  notDone: task => action(CHANGE_CHECKBOX.NOT_DONE, { task })
};
