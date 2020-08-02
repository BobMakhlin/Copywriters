import { usersUrl } from './urls.js';
import { loadJson } from './loadingHelper.js';

export default class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    _onUserClicked(event) {
        getUserInfo(this.id);
    }

    toHtml() {
        let copywriterDiv = document.createElement('div');
        copywriterDiv.className = 'copywriters__item';
        copywriterDiv.innerText = this.name;
        copywriterDiv.addEventListener('click', this._onUserClicked.bind(this));

        return copywriterDiv;
    }
}

function getUserInfo(id) {
    loadJson(`${usersUrl}/${id}`)
        .then(data => console.log(data));
}
