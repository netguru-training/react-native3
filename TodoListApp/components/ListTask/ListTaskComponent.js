import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const CheckBox = require('react-native-checkbox');

export default class ListTask extends Component {
    constructor(props) {
        super(props);
    }

    onCheckboxChange = () => {
        this.props.checkBoxDone(this.props.task);
    };

    render() {
        return (
            <View style={styles.listItem}>
                <CheckBox onChange={this.onCheckboxChange} containerStyle={styles.checkboxContainer} labelStyle={styles.checkboxLabel}/>
                <Text style={styles.listItemText}>{this.props.task.name}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },

    listItemText: {
        paddingTop: 2,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        width: 'auto',
    },

    checkboxStyle: {
        width: 20,
        height: 20
    },

    checkboxLabel: {
        display: 'none'
    },
});


