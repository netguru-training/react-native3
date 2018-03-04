import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const FloatingButton = () => {
    onPress = () => {
        concole.log('floatingButton');
        this.props.navigation.navigate('Details', );
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
        >
            <Text> Touch Here </Text>
        </TouchableOpacity>
    </View>
  )
};

FloatingButton.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    button: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: '#00BCD4'
    }
});

export default FloatingButton;
