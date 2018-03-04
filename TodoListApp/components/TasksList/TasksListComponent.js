import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import PropTypes from "prop-types";
import TaskComponent from "../Task/TaskComponent";
import FloatingButton from "../FloatingButton/FloatingButton";

const TasksListComponent = (props) => {
    const handleCheckBoxDone = (task) => {
        props.checkBoxDone(task);
    };

    const handleCheckBoxNotDone = (task) => {
        props.checkBoxNotDone(task);
    };


    const renderItem = ({item}) => {
        return (
            <TaskComponent
                task={item}
                checkBoxDone={handleCheckBoxDone}
                checkBoxNotDone={handleCheckBoxNotDone}
                navigation={props.navigation}
            />
        );
    };

    // todo: add key obtainer for each item
  let c;
  if(props.tasks.length) {
    c = <FlatList
      renderItem={renderItem}
      data={props.tasks}
      keyExtractor={(item) => item.id}
    />;
  } else {
    c = <View style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 20}}>Brak notatek! Dodaj pierwszą :)</Text></View>;
  }

    return (
        <View style={styles.listView}>
          {c}
            <FloatingButton navigation={props.navigation}/>
        </View>
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
    },

    listView: {
      display: 'flex',
      height: '100%',
    }
});

export default TasksListComponent;