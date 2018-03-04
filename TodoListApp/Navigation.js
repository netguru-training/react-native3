import {StackNavigator} from "react-navigation";
import DetailScreen from "./components/DetailScreen/DetailScreen";
import TasksListContainer from './components/TasksList/TasksListContainer';
import React, {Component} from "react";


export default StackNavigator({
    Home: {
      screen: TasksListContainer
      },
  });