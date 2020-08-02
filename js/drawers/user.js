import { usersUrl } from '../urls.js';
import { loadJson } from '../loadingHelper.js';
import cachingDecorator from '../cachingDecorator.js';
import UserInfoTableModifier from './user-info.js';

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

const selectedUser = document.querySelector('.selected-copywriter');
const selectedUserInfoTable = document.querySelector('.selected-copywriter__info');

const cachingUserLoader = cachingDecorator(loadJson, args => args);

function showUserInfo(id) {
    cachingUserLoader(`${usersUrl}/${id}`)
        .then(data => {
            selectedUser.style.display = 'block';

            let tableModifier = new UserInfoTableModifier(
                data.name, data.username, data.address, data.email, data.phone, data.website
            );
            tableModifier.applyFor(selectedUserInfoTable);
        });
}
