import modifyUserInfo from '../user-info/modifier.js';

const nSelectedUser = document.querySelector('.selected-copywriter');
const nPostsBlock = nSelectedUser.querySelector('.selected-copywriter__posts-block');


export default function initUser(component, model) {
    component.addEventListener('click', () => onUserClicked(model));
}
function onUserClicked(model) {
    nSelectedUser.classList.add('selected-copywriter_active');
    nPostsBlock.classList.remove('selected-copywriter__posts-block_active');

    modifyUserInfo(nSelectedUser, model);
}
