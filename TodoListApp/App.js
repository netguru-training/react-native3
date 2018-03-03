import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Navigator, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ListTaskComponent from './components/ListTask/ListTaskComponent';
import {Provider} from 'react-redux';
import ListTaskContainer from './components/ListTask/ListTaskContainer';
import configureStore from './redux/createStore';
//
const store = configureStore({});
import DetailScreen from './DetailScreen';


class App extends React.Component {

	constructor() {
		super();

		this.state = {
			tasks: this.sampleTasks()
		}
	}

	sampleTasks() {
		return [
			{ id: 1, name: 'Pierwszy task', description: 'Opis taska', isDone: false },
			{ id: 2, name: 'Drugi lecz zrobiony', description: 'Task szybko wykonany', isDone: true },
		];
	}

  render() {
    return (
			<Provider store={store}>
				<View style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>
					{/*<FlatList style={styles.container}>*/}
						{this.state.tasks.map(task => <ListTaskContainer key={task.id} task={task} />)}
					{/*</FlatList>*/}
				</View>
			</Provider>
    );
  }
}


export default StackNavigator({
  Home: {
    // screen: DetailScreen,
    screen: App,
  },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
