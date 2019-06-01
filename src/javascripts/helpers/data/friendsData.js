import axios from 'axios';
import apiKeys from '../apiKeys.json';
// import friends from '../../components/friends/friends.js';
const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);


const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      Object.keys(friendResults).forEach((friendId) => {
        friendResults[friendId].id = friendId;
        friends.push(friendResults[friendId]);
      });
      resolve(friends);
    })
    .catch(err => reject(err));
});

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

export default { addNewFriend, getFriendsByUid, deleteFriend };
