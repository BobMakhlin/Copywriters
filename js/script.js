import { usersUrl } from './urls.js';
import { loadJson } from './loadingHelper.js';
import User from './drawers/user.js';

const copywritersBlock = document.querySelector('.copywriters');

loadJson(usersUrl)
    .then(copywriters => {
        for (let copywriter of copywriters) {
            let user = new User(copywriter.id, copywriter.name);
            let copywriterDiv = user.toHtml();
            copywritersBlock.append(copywriterDiv);
        }
    });
