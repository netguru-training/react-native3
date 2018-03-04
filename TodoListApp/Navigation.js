import {StackNavigator} from "react-navigation";
import DetailScreenContainer from "./components/DetailScreen/DetailScreenContainer";
import DetailScreen from "./components/DetailScreen/DetailScreen";

import TasksListContainer from './components/TasksList/TasksListContainer';
import React, {Component} from "react";


export default StackNavigator({
    Home: {
      screen: TasksListContainer
      },
    Details: {
        screen: DetailScreenContainer
    }
  });