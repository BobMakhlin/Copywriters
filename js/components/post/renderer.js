
export default function createPost(model) {
    let copywriterPost = document.createElement('div');
    copywriterPost.className = 'copywriter-post';

    copywriterPost.innerHTML = `
            <p class="copywriter-post__title">${model.title}</p>
            <p class="copywriter-post__body">${model.body}</p>
        `;

    return copywriterPost;
}

