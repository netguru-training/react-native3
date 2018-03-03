import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { ListTask } from './components/ListTask/ListTask';
import { StackNavigator } from 'react-navigation';


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
    	<View>
				{/*<FlatList style={styles.container}>*/}
					{this.state.tasks.map(task => <ListTask key={task.id} task={task} />)}
				{/*</FlatList>*/}
			</View>
    );
  }
}



export default StackNavigator({
  Home: {
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
