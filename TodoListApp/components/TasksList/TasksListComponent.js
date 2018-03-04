import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import PropTypes from "prop-types";
import _ from 'lodash';
const CheckBox = require("react-native-checkbox");

import TaskContainer from "../Task/TaskContainer"

const TasksListComponent = ({tasks}) => {
    return (
        <View style={styles.listItems}>
            {tasks.map(task => <TaskContainer key={task.id} task={task} /> )}
        </View>
    )
};

TasksListComponent.propTypes = {
    tasks: PropTypes.any // TODO: add real structure here
};

const styles = StyleSheet.create({
    listItems: {
        display: "flex",
        flexDirection: "row",
        padding: 20
    }
});

export default TasksListComponent;