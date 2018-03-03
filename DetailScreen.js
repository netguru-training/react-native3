import React, { Component, TextInput } from 'react';

export default class DetailScreen extends Component {
    render() {
        return (
            <View>
                <TextInput
                placeholder = "Name"
                />

                <TextInput
                placeholder = "Description"
                />
            </View>
        );
    }
}