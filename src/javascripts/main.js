import firebase from 'firebase/app';
import '../styles/main.scss';
import 'bootstrap';
import Auth from './components/auth/auth';
import birthday from './components/birthday/birthday';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import MyNavbar from './components/MyNavbar/MyNavbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  Auth.authStringBuilder();
  birthday.birthdayStringBuilder();
};

init();
