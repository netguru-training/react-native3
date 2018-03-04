import { StackNavigator } from "react-navigation";
import ListTaskContainer from "./components/ListTask/ListTaskContainer";
import DetailScreen from "./components/DetailScreen/DetailScreen";
import ListTaskComponent from "./components/ListTask/ListTaskComponent"
import React, { Component } from "react";


export default StackNavigator({
    Home: {
      screen: DetailScreen
      },
  });