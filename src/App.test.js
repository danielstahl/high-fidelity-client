import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

it('renders without crashing', () => {
  var config = {
    apiKey: "AIzaSyDCkNqPBd9XiSDypMe0EUgIA4e1HB9LIp4",

    // Only needed if using Firebase Realtime Database (which we will be in this example)
    databaseURL: "https://high-fidelity-676ee.firebaseio.com",

    // Only needed if using Firebase Authentication
    authDomain: "high-fidelity-676ee.firebaseapp.com",

    // Only needed if using Firebase Storage
    storageBucket: "high-fidelity-676ee.appspot.com"
  };

  firebase.initializeApp(config);

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
