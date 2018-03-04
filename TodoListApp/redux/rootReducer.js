import { combineReducers } from "redux";
import TaskReducer, { TASK_STATE_KEY } from "./Task/TaskReducer";
import {DATALOADING_LOAD_KEY, DataLoadingReducer} from "./DataLoading/DataLoadingReducer";

const rootReducer = combineReducers({
  [TASK_STATE_KEY]: TaskReducer,
});

export default rootReducer;
