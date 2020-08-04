class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    toHtmlNode() {
        let copywriterPost = document.createElement('div');
        copywriterPost.className = 'copywriter-post';

        copywriterPost.innerHTML = `
            <p class="copywriter-post__title">${this.title}</p>
            <p class="copywriter-post__body">${this.body}</p>
        `;

        return copywriterPost;
    }
}
