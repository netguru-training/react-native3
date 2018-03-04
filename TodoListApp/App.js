
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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: {},
      store: null
    };

    configureStore({
      Task: this.sampleTasks()
    }).then(store => {
    	this.setState({ store });
			this.setState({ tasks: store.getState().Task });
    });
  }

  getTaskList() {
		// console.log('evaluating getTaskList', this.state.store.Task);
		if(this.state.tasks) {
  		return Object.values(this.state.tasks);
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
		}
	}

  render() {
    return (
      (
				this.state.store && <Provider store={this.state.store}>
          <View style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>
            {/*<FlatList style={styles.container}>*/}
            {this.getTaskList().map(task => (
              <ListTaskContainer key={task.id} task={task} />
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
