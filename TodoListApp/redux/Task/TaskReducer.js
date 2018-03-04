import * as CheckBoxActions from "./CheckBox/CheckBoxActions";
import * as TaskAction from './TaskActions'
import _ from "lodash";
import {DATALOADING} from "./CheckBox/CheckBoxActions";

const initialState = [
  {id: 1, name: "Test", description: "asdsa", isDone: false}
];

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CheckBoxActions.CHANGE_CHECKBOX.DONE:

      return state.map(task => {
        if (task.id === action.task.id) {
          task.isDone = true;
        }
        return task;
      });

    case CheckBoxActions.CHANGE_CHECKBOX.NOT_DONE:
      return state.map(task => {
        if (task.id === action.task.id) {
          task.isDone = false;
        }
        return task;
      });

    case TaskAction.TASK.SAVE:
      const actionTask = action.task;
      const currentTask = state.find(el => el.id === actionTask.id);

      if (currentTask !== null) {
          return state.map(task => {
            if (task.id !== actionTask.id) {
              return task;
            } else {
              return actionTask;
            }})
        } else {
          return [...state, action.task];
        }

    case DATALOADING.LOAD_ALL:
      console.log(DATALOADING.LOAD_ALL, action.data);
      return action.data && action.data.Task && action.data.Task.tasks || [];

    default:
      return state;
  }
};

// todo: zmienic to na Tasks
export const TASK_STATE_KEY = "Task";

// Selectors
export const getTasks = state => {
  console.log('state in  reducer', state);
  return _.get(state, [TASK_STATE_KEY]);
};

export default TaskReducer;
