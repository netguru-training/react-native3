import { combineReducers } from "redux";
import TaskReducer, {TASK_STATE_KEY} from './Task/TaskReducer';

const rootReducer = combineReducers({
    [TASK_STATE_KEY]: TaskReducer
});

export default rootReducer;