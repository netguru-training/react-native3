import React, { Component} from 'react';
import {TextInput, View, Alert, Button, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import get from 'lodash/get'

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            task: props.navigation.state.params.task
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ saveAction: this.save, });
    }

    save = () => {
        this.props.saveTask(this.state.task);
        this.props.navigation.goBack();
    };


    showSaveDialog = () => {
        Alert.alert(
            'Discard changes?',
            null,
            [
              {text: 'Discard', onPress: () => this.props.navigation.goBack()},
              {text: 'Cancel', onPress: () => {console.log(this.state.task)}},
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
                onChangeText={(text)=>{ 
                    const task = {
                        ...this.state.task,
                        name: text
                    }
                    this.setState({task})}
                }
                value= {this.state.task.name}
                placeholder='Name'
                style={styles.title}/>

              <View style={{height:2}}/>

              <TextInput 
                onChangeText={(text)=>{ 
                    const task = {
                        ...this.state.task,
                        description: text
                    }
                    this.setState({task})}
                }
                placeholder= 'Description'
                multiline={true}
                value= {this.state.task.description}
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
