export default class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    toHtml() {
        let post = document.createElement('div');
        post.className = 'copywriter-post';

        let title = document.createElement('p');
        title.className = 'copywriter-post__title';
        title.innerText = this.title;

        let body = document.createElement('p');
        body.className = 'copywriter-post__body';
        body.innerText = this.body;

        post.append(title, body);
        return post;
    }
}
