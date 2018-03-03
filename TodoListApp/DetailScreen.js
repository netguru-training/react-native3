import React, { Component } from "react";
import { TextInput, View, Alert, Button, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description
    };
  }

  static navigationOptions = {
    title: "Details",
    headerRight: (
      <Button
        onPress={() => alert("This is a save button!")}
        title="Save"
        color="#000"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={text => {
            this.setState({ title: text });
            console.log(this.state.description);
            debugger;
          }}
          placeholder="Name"
          style={styles.title}
        />

        <View style={{ height: 2 }} />

        <TextInput
          onChangeText={text => {
            this.setState({ description: text });
          }}
          placeholder="Description"
          multiline={true}
          style={styles.description}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    backgroundColor: "#fff",
    fontSize: 20
  },

  description: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    fontSize: 16
  }
});
