import React, { Component} from 'react';
import {TextInput, View, Alert, Button, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class DetailScreen extends Component {

    static navigationOptions = {
        title: 'Details',
        headerRight: (
            <Button
              onPress={() => alert('This is a save button!')}
              title="Save"
              color="#000"
            />
          ),
      };

    render() {
        return (
            <View style={{flex:1}}>
              <TextInput 
              placeholder='Name'
              style={styles.title}/>

              <View style={{height:2}}/>

              <TextInput 
              placeholder= 'Description'
              multiline={true}
              style={styles.description
               }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        backgroundColor: '#fff',
        fontSize: 20,
    },

    description: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        fontSize: 15,
    },
  });
