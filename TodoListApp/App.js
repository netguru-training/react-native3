import React from 'react';
import { FlatList, StyleSheet, Text, View, Platform, Navigator, StatusBar } from 'react-native';
import ListTask from './components/ListTask/ListTask';
import { StackNavigator } from 'react-navigation';
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
    	<View style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>
				{/*<FlatList style={styles.container}>*/}
					{this.state.tasks.map(task => <ListTask key={task.id} task={task} />)}
				{/*</FlatList>*/}
			</View>
    );
  }
}



export default StackNavigator({
  Home: {
    screen: DetailScreen,
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
