import React from "react";
import { connect } from "react-redux";
import TasksListComponent from './TasksListComponent';
import getTasks from "../../redux/Task/TaskReducer";

const TasksListContainer = props => <TasksListComponent {...props} />;

const mapStateToProps = (state) => ({
    tasks: getTasks(state)
});

export default connect(mapStateToProps)(TasksListContainer);