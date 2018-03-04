import React from "react";
import {connect} from "react-redux";
import get from 'lodash/get';

import * as actions from "../../redux/Task/CheckBox/CheckBoxActions";
import ListTaskComponent from "./ListTaskComponent";

const ListTaskContainer = props => <ListTaskComponent {...props} />;

const mapStateToProps = (state, props) => {
  const task = state && state.Task && state.Task[props.id];
  console.log('MapStateToProps in ListTaskContainer', task, state);
  return { task };
};

const mapDispatchToProps = dispatch => ({
  checkBoxDone: task => dispatch(actions.checkBox.done(task)),
  checkBoxNotDone: task => dispatch(actions.checkBox.notDone(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTaskContainer);
