import { usersUrl } from './urls.js';
import { loadJson } from './loadingHelper.js';
import cachingDecorator from './cachingDecorator.js';

export default class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    _onUserClicked(event) {
        showUserInfo(this.id);
    }

    toHtml() {
        let copywriterDiv = document.createElement('div');
        copywriterDiv.className = 'copywriters__item';
        copywriterDiv.innerText = this.name;
        copywriterDiv.addEventListener('click', this._onUserClicked.bind(this));

        return copywriterDiv;
    }
}


let cachingUserLoader = cachingDecorator(loadJson, args => args);

function showUserInfo(id) {
    cachingUserLoader(`${usersUrl}/${id}`)
        .then(data => console.log(data));
}
