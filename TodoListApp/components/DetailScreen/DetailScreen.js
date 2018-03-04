import React, { Component} from 'react';
import {TextInput, View, Alert, Button, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import get from 'lodash/get'

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: props.title,
            description: props.description
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ saveAction: this.showSaveDialog, });
    }

    save = () => {
        //todo save data here
    };


    showSaveDialog = () => {
        Alert.alert(
            'Discard changes?',
            null,
            [
              {text: 'Discard', onPress: () => this.props.navigation.goBack()},
              {text: 'Cancel', onPress: () => {}},
            ],
            { cancelable: false }
          )
    }

    static navigationOptions = ({ navigation }) => {
            const params = navigation.state.params || {};
            return {
        title: 'Details',
        headerRight: (
            <Button
             onPress={get(navigation, 'state.params.saveAction', () => {})} 
              title="Save"
              color="#000"
            />
          )}
      };

    render() {
        return (
            <View style={{flex:1}}>
              <TextInput 
                onChangeText={(text)=>{this.setState({title: text})}}
                placeholder='Name'
                style={styles.title}/>

              <View style={{height:2}}/>

              <TextInput 
                onChangeText={(text)=>{this.setState({description: text})}}
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
        fontSize: 16,
    },
  });
