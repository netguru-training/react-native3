import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/Task/CheckBox/CheckBoxActions";
import TaskComponent from "./TaskComponent";

const TaskContainer = props => <TaskComponent {...props} />;

const mapStateToProps = state => {
    return { state };
};

const mapDispatchToProps = dispatch => ({
    checkBoxDone: task => dispatch(actions.checkBox.done(task)),
    checkBoxNotDone: task => dispatch(actions.checkBox.notDone(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
