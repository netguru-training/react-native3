import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/Task/TaskActions";
import DetailScreen from "./DetailScreen";

const DetailScreenContainer = props => <DetailScreen {...props} />;

const mapStateToProps = state => {
    return { state };
};

const mapDispatchToProps = dispatch => ({
    saveTask: task => dispatch(actions.Task.save(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
