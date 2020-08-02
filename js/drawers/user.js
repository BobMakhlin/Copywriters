import { usersUrl, postsUrl } from '../urls.js';
import { loadJson } from '../loadingHelper.js';
import cachingDecorator from '../cachingDecorator.js';
import UserInfoTableModifier from './user-info.js';
import Post from './post.js';

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
const showPostsButton = document.querySelector('.selected-copywriter__show-posts-button');
const selectedUserPostsBlock = document.querySelector('.selected-copywriter__posts-block');
const selectedUserPosts = document.querySelector('.selected-copywriter__posts');

const cachingUserLoader = cachingDecorator(loadJson, args => args);
const cachingUserPostsLoader = cachingDecorator(loadJson, args => args);


function showUserInfo(userId) {
    cachingUserLoader(`${usersUrl}/${userId}`)
        .then(data => {
            selectedUser.style.display = 'block';
            selectedUserPostsBlock.style.display = 'none';

            let tableModifier = new UserInfoTableModifier(
                data.name, data.username, data.address, data.email, data.phone, data.website
            );
            tableModifier.applyFor(selectedUserInfoTable);

            showPostsButton.onclick = event => showUserPosts(event, userId);
        })
        .catch(err => console.log(err));
}

function showUserPosts(event, userId) {
    cachingUserPostsLoader(`${postsUrl}=${userId}`)
        .then(posts => {
            selectedUserPostsBlock.style.display = 'block';
            selectedUserPosts.innerHTML = '';

            for (let postData of posts) {
                let post = new Post(postData.title, postData.body);
                let postDiv = post.toHtml();
                selectedUserPosts.append(postDiv);
            }
        })
        .catch(err => console.log(err));
}
