import {action} from '../helpers';

export const TASK = {
  SAVE: "SAVE_TASK",
};

export const Task = {
  save: task => action(TASK.SAVE, { task })
};