import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';


const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn-danger">';
  domString += '<h2>Login with Google</h2>';
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
