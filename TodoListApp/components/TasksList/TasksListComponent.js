import React from "react";
import {FlatList, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import TaskComponent from "../Task/TaskComponent";

const TasksListComponent = (props) => {
    const handleCheckBoxDone = (task) => {
        props.checkBoxDone(task);
    };

    const handleCheckBoxNotDone = (task) => {
        props.checkBoxNotDone(task);
    };

    const renderItem = ({item}) => {
        console.log('rendering ', item);
        return (
          <TaskComponent
            task={item}
            checkBoxDone={handleCheckBoxDone}
            checkBoxNotDone={handleCheckBoxNotDone}
          />
        );
    };

    // console.log('before flatlist', tasks);
    //


    return (
        <FlatList
            renderItem={renderItem}
            data={props.tasks}
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
        flexDirection: "row",
        padding: 20
    }
});

export default TasksListComponent;