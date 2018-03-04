import React from "react";
import { connect } from "react-redux";
import TasksListComponent from './TasksListComponent';
import * as actions from '../../redux/Task/CheckBox/CheckBoxActions';
const TasksListContainer = props => <TasksListComponent {...props} />;

import {getTasks} from "../../redux/Task/TaskReducer";

const mapStateToProps = (state) => ({
    tasks: getTasks(state)
});

const mapDispatchToProps = dispatch => ({
    checkBoxDone: task => dispatch(actions.checkBox.done(task)),
    checkBoxNotDone: task => dispatch(actions.checkBox.notDone(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);