import React from "react";
import {FlatList, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import TaskComponent from "../Task/TaskComponent";

const TasksListComponent = ({task}) => {
    const handleCheckBoxDone = (task) => {
        this.props.checkBoxDone(task);
    };

    const handleCheckBoxNotDone = (task) => {
        this.props.checkBoxNotDone(task);
    };

    const renderItem = ({item}) => (
        <TaskComponent
            task={item}
            checkBoxDone={handleCheckBoxDone}
            checkBoxNotDone={handleCheckBoxNotDone}
        />
    );

    return (
        <FlatList
            renderItem={renderItem}
            data={task}
        />
    )
};

TasksListComponent.propTypes = {
    tasks: PropTypes.any, // TODO: add real structure here
    checkBoxDone: PropTypes.func,
    checkBoxNotDone: PropTypes.func
};

const styles = StyleSheet.create({
    listItems: {
        display: "flex",
        flexDirection: "column",
        padding: 20
    }
});

export default TasksListComponent;