import axios from 'axios';
import apiKeys from '../apiKeys.json';
// import friends from '../../components/friends/friends.js';
const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend };
