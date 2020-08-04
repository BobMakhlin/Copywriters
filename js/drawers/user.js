class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toHtml() {
        let copywriterDiv = document.createElement('div');
        copywriterDiv.className = 'copywriters__item';
        copywriterDiv.innerText = this.name;
        copywriterDiv.addEventListener('click', () => showUserInfo(this.id));

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

            showPostsButton.onclick = () => showUserPosts(userId);
        })
        .catch(err => console.log(err));
}

function showUserPosts(userId) {
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
