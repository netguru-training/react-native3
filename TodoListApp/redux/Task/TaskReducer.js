import * as CheckBoxActions from "./CheckBox/CheckBoxActions";
import * as TaskAction from './TaskActions'
import _ from 'lodash';
const initialState = {};
import _ from "lodash";
import {DATALOADING} from "./CheckBox/CheckBoxActions";

const initialState = [];

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CheckBoxActions.CHANGE_CHECKBOX.DONE:

      return state.tasks.map(task => {
        if (task.id === action.task.id) {
          task.isDone = true;
        }
        return task;
      });

    case CheckBoxActions.CHANGE_CHECKBOX.NOT_DONE:
      return state.tasks.map(task => {
        if (task.id === action.task.id) {
          task.isDone = false;
        }
        return task;
      });

    case TaskAction.TASK.SAVE:
      task = action.task;
      currentTask = state.Task[task.id];

      if (currentTask !== null) {
        state.Task[task.id] = task;
        return {
          ...state
        };
      } else {

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
