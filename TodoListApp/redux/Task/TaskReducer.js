import * as CheckBoxActions from "./CheckBox/CheckBoxActions";

const initialState = {};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CheckBoxActions.CHANGE_CHECKBOX.DONE:
      console.log("changeCheckboc.done", state);
      return {
        ...state
      };

    case CheckBoxActions.CHANGE_CHECKBOX.NOT_DONE:
      console.log("changeCheckboc.notdone", state);
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
