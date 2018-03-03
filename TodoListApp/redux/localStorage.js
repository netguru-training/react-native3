import { AsyncStorage } from "react-native";

export const loadState = async () => {
  try {
    const serializedStatePromise = AsyncStorage.getItem("state");
    const serializedState = await serializedStatePromise;
    console.log("Odczytano z AsyncStorage:", serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("error saving state", err);
  }
};
