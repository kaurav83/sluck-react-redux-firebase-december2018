import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCxpP5S8KOJ5OsPJvO1c9riJWZNPk-32lM",
    authDomain: "react-redux-slack-project.firebaseapp.com",
    databaseURL: "https://react-redux-slack-project.firebaseio.com",
    projectId: "react-redux-slack-project",
    storageBucket: "react-redux-slack-project.appspot.com",
    messagingSenderId: "626575873794"
};

firebase.initializeApp(config);

export default firebase;