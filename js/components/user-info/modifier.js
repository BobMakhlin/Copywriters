import { postsUrl } from '../../helpers/urls.js';
import cachingDecorator from '../../helpers/cachingDecorator.js';
import { loadJson } from '../../helpers/loadingHelper.js';

import PostModel from '../post/model.js';
import createPost from '../post/renderer.js';

const cachingLoadPosts = cachingDecorator(loadJson, args => args);


export default function modifyUserInfo(nSelectedUser, userModel) {
    let nName = nSelectedUser.querySelector('.selected-copywriter__name');
    nName.innerText = userModel.name;

    let nUsername = nSelectedUser.querySelector('.selected-copywriter__username');
    nUsername.innerText = userModel.username;

    let nAddress = nSelectedUser.querySelector('.selected-copywriter__address');
    nAddress.innerText = `${userModel.address.city}, ${userModel.address.street}`;

    let nEmail = nSelectedUser.querySelector('.selected-copywriter__email');
    nEmail.innerText = userModel.email;

    let nPhone = nSelectedUser.querySelector('.selected-copywriter__phone');
    nPhone.innerText = userModel.phone;

    let nWebsite = nSelectedUser.querySelector('.selected-copywriter__website');
    nWebsite.innerText = userModel.website;


    const nGetPostsButton = nSelectedUser.querySelector('.selected-copywriter__show-posts-button');
    const nPostsBlock = nSelectedUser.querySelector('.selected-copywriter__posts-block');
    const nPosts = nSelectedUser.querySelector('.selected-copywriter__posts');

    nGetPostsButton.onclick = () => {
        nPostsBlock.classList.add('selected-copywriter__posts-block_active');
        showUserPosts(nPosts, userModel.id);
    }
}

async function showUserPosts(container, userId) {
    let posts = await cachingLoadPosts(`${postsUrl}=${userId}`);

    container.innerHTML = '';

    for (let item of posts) {
        let postModel = new PostModel(item.title, item.body);
        let nPost = createPost(postModel);
        container.append(nPost);
    }
}
