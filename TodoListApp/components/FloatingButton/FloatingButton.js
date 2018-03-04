import React from "react";
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";

const FloatingButton = (props) => {
  const onPress = () => {
    props.navigation.navigate('Details',);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  )
};

FloatingButton.propTypes = {};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 30,
    bottom: 50
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    backgroundColor: '#00D664',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // lineHeight: 75,
  },
  text: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 50
  }
});

export default FloatingButton;
