import * as CheckBoxActions from "./CheckBox/CheckBoxActions";
import _ from "lodash";
import {DATALOADING} from "./CheckBox/CheckBoxActions";
const initialState = {};

const TaskReducer = (state = initialState, action) => {
  let task;
  switch (action.type) {
    case CheckBoxActions.CHANGE_CHECKBOX.DONE:
      console.log("changeCheckbox.done", action);
      task = action.task;
      task.isDone = true;
      return {
        ...state
      };

    case CheckBoxActions.CHANGE_CHECKBOX.NOT_DONE:
      console.log("changeCheckbox.notdone", state);
      task = action.task;
      task.isDone = false;
      return {
        ...state
      };

    case DATALOADING.LOAD_ALL:
      console.log(DATALOADING.LOAD_ALL, action.data);
      return {
        ...(action.data && action.data.Task || {})
      };
    default:
      return state;
  }
};

// selectors


// todo: zmienic to na Tasks
export const TASK_STATE_KEY = "Task";

// Selectors
export const getTasks = state => _.get(state, [TASK_STATE_KEY]);

export default TaskReducer;
