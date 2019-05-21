import firebase from 'firebase/app';
import '../styles/main.scss';
import 'bootstrap';
import Auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import MyNavbar from './components/MyNavbar/MyNavbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  Auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
