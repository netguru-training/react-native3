import * as CheckBoxActions from "./CheckBox/CheckBoxActions";
import _ from 'lodash';
const initialState = {};

const TaskReducer = (state = initialState, action) => {
	let task;
  switch (action.type) {
    case CheckBoxActions.CHANGE_CHECKBOX.DONE:
      console.log("changeCheckboc.done", action);
      task = action.task;
      task.isDone = true;
      // console.log('state po zmianie:', state);
      return {
        ...state
      };

    case CheckBoxActions.CHANGE_CHECKBOX.NOT_DONE:
      console.log("changeCheckboc.notdone", state);
			task = action.task;
			task.isDone = false;
      return {
        ...state
      };

    default:
      return state;
  }
};

// todo: zmienic to na Tasks
export const TASK_STATE_KEY = "Task";

// Selectors

export default TaskReducer;
