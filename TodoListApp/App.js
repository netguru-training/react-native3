import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import {Provider} from "react-redux";
import configureStore from "./redux/createStore";
import {DATALOADING} from "./redux/Task/CheckBox/CheckBoxActions";
import {loadState, saveState} from "./redux/localStorage";
import throttle from "lodash/throttle";
import Nav from "./Navigation";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      storeReady: false,
    };

    this.store = configureStore({});
  }

  componentDidMount() {
    loadState().then(persistedState => {
      console.log('persisted state', persistedState);
      this.store.dispatch({
        type: DATALOADING.LOAD_ALL,
        data: persistedState
      });

      this.store.subscribe(
        throttle(() => {
          saveState(this.store.getState());
        }, 1000)
      );

      this.setState({ storeReady: true });
      console.log('finished');
    });
  }

  render() {
    if(!this.state.storeReady) {
      return <Text>Spinner</Text>
    }
    return (
      (
        <Provider store={this.store}>
          <View style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>
            <Nav/>
          </View>
        </Provider>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
