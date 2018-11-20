import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDskDD_1CEaYsXR-rhapaPKwXvodUJQN68",
    authDomain: "welcome-landing.firebaseapp.com",
    databaseURL: "https://welcome-landing.firebaseio.com",
    projectId: "welcome-landing",
    storageBucket: "welcome-landing.appspot.com",
    messagingSenderId: "866746168598"
  };

  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));


