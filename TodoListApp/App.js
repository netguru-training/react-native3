
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator,
  StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import ListTaskContainer from "./components/ListTask/ListTaskContainer";
import configureStore from "./redux/createStore";
import DetailScreen from "./components/DetailScreen/DetailScreen";
import {DATALOADING} from "./redux/Task/CheckBox/CheckBoxActions";
import {loadState, saveState} from "./redux/localStorage";
import throttle from "lodash/throttle";

class App extends React.Component {
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

  getTaskList() {
    const state = this.store.getState();
    if (state.Task) {
      return Object.values(state.Task);
    }
    return [];
  }

  sampleTasks() {
    return {
      1: {
        id: 1,
        name: "Pierwszy task",
        description: "Opis taska",
        isDone: false
      },

      2: {
        id: 2,
        name: "Drugi lecz zrobiony",
        description: "Task szybko wykonany",
        isDone: true
      }
    };
  }

  render() {
    if(!this.state.storeReady) {
      return <Text>Spinner</Text>
    }
    console.log('shoudl work', this.getTaskList());
    return (
      (
        <Provider store={this.store}>
          <View style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>

            {/*<FlatList style={styles.container}>*/}
            {this.getTaskList().map(task => (
              <ListTaskContainer key={task.id} id={task.id} />
            ))}
            {/*</FlatList>*/}
          </View>

        </Provider>
      )
    );
  }
}

export default StackNavigator({
  Home: {
    // screen: DetailScreen,
    screen: App
	},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
