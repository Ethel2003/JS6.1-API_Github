import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {
    let div = document.querySelector(".result");
    div.innerHTML = "<p>Login: "+`${user.id}`+ "<br> <p>Username: "+`${user.login}`+ "<br>";
}

export default showUser;
