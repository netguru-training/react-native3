import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const CheckBox = require("react-native-checkbox");

export default class ListTaskComponent extends Component {
  constructor(props) {
    super(props);
  }

  onCheckboxChange = () => {

  	const{checkBoxNotDone, checkBoxDone, task} = this.props;

    if(task.isDone) {
    	checkBoxNotDone(task);
		}else {
    	checkBoxDone(task);
		}
  };

  render() {
    return (
      <View style={styles.listItem}>
        <CheckBox
          containerStyle={styles.checkboxContainer}
          labelStyle={styles.checkboxLabel}
          checked={this.props.task.isDone}
					onChange={this.onCheckboxChange}
        />
        <Text style={styles.listItemText}>{this.props.task.name}</Text>
      </View>
    );
  }
}

ListTaskComponent.propTypes = {
	checkBoxDone: PropTypes.func,
	checkBoxNotDone: PropTypes.func,
};


const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    padding: 20
  },

  listItemText: {
    paddingTop: 2
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    width: "auto"
  },

  checkboxStyle: {
    width: 20,
    height: 20
  },

  checkboxLabel: {
    display: "none"
  }
});
