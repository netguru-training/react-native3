import { createStore } from "redux";
import rootReducer from "./rootReducer";
import _ from "lodash";
import { loadState, saveState } from "./localStorage";

export default function configureStore(initialState) {
  return new Promise(resolve => {
    loadState().then(persistedState => {
      console.log("persistedState", persistedState);
      const store = createStore(rootReducer, {
        ...persistedState,
        ...initialState
      });

      store.subscribe(
        _.throttle(() => {
          saveState(store.getState());
        }, 1000)
      );

      resolve(store);
    });
  });
}
