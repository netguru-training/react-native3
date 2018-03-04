import React from "react";
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";

const FloatingButton = () => {
    onPress = () => {
        this.props.navigation.navigate('Details', );
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
        >
            <Text style={styles.text}> Add task </Text>
        </TouchableOpacity>
    </View>
  )
};

FloatingButton.propTypes = {};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    button: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
        backgroundColor: '#00D664'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default FloatingButton;
