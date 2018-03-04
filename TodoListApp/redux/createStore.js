import { createStore } from "redux";
import rootReducer from "./rootReducer";
import _ from "lodash";
import { loadState, saveState } from "./localStorage";
import {DATALOADING} from "./Task/CheckBox/CheckBoxActions";

export default function configureStore(initialState) {

  return createStore(rootReducer, {
    ...initialState,
  });
}
