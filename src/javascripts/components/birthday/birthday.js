import birthdayData from '../../helpers/data/birthdayData';
import util from '../../helpers/util';

const birthdayStringBuilder = (uid) => {
  birthdayData.getBirthdayByUid(uid)
    .then((birthday) => {
      let domString = '<div class="jumbotron jumbotron-fluid vertical-center">';
      domString += '<div class="container">';
      domString += '<h1 class="display-4">My birthday</h1>';
      domString += `<p class="lead"><h2>${birthday.date}</h2></p>`;
      domString += `<img src=${birthday.imageUrl} alt="birthday location">`;
      domString += `<h3>Location: ${birthday.location}</h3>`;
      domString += `<h3>Time: ${birthday.time}</h3>`;
      domString += '</div>';
      domString += '</div>';
      util.printToDom('event', domString);
    })
    .catch(err => console.error('could not get birthday', err));
};

export default { birthdayStringBuilder };
