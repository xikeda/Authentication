import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Card, CardSection, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
  state = {loggedIn: null};

  componentWillMount() {
    // Initialize Firebase
    var config = {
     apiKey: "AIzaSyCgRywhtuBEjeRllke5oEsaXZUgVETeKdA",
     authDomain: "authentication-51c7c.firebaseapp.com",
     databaseURL: "https://authentication-51c7c.firebaseio.com",
     projectId: "authentication-51c7c",
     storageBucket: "authentication-51c7c.appspot.com",
     messagingSenderId: "483655217195"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      }
      else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <Card>
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
        </CardSection>
        </Card>;
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size="large"/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
