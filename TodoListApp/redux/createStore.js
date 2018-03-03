import {createStore} from "redux";
import rootReducer from "./rootReducer";
import _ from "lodash";
import {loadState, saveState} from "./localStorage";

const {
    composeWithDevTools
} = require("../../node_modules/redux-devtools-extension");

enhancer = composeWithDevTools(enhancer);

export default function configureStore(initialState) {
    const persistedState = loadState();

    const store = createStore(
        rootReducer,
        { ...persistedState, ...initialState },
        enhancer
    );
    store.subscribe(
        _.throttle(() => {
            saveState({ test: false });
        }, 1000)
    );

    return store;
}
