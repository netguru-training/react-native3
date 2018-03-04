
export const TASK = {
  SAVE: "SAVE_TASK",
};

export const Task = {
  save: task => action(TASK.ADD, { task })
};