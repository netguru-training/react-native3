import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const CheckBox = require('react-native-checkbox');

export default class ListTask extends React.Component {
	constructor(props) {
		super(props);
	}

	onCheckboxChange = () => {
		console.log(arguments);
	};

	render() {
		return (
			<View style={styles.listItem}>
				<CheckBox containerStyle={styles.checkboxContainer} labelStyle={styles.checkboxLabel} />
				<Text style={styles.listItemText}>{this.props.task.name}</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		padding: 20,
	},

	listItemText: {
		paddingTop: 2,
	},

	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
		width: 'auto',
	},

	checkboxStyle: {
		width: 20,
		height: 20
	},

	checkboxLabel: {
		display: 'none'
	},


	// ,

});




