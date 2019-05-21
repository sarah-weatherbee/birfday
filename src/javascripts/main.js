import firebase from 'firebase/app';
import '../styles/main.scss';
import 'bootstrap';
import Auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
