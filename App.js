import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
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
