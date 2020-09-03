import { usersUrl } from './helpers/urls.js';

import { loadJson } from './helpers/loadingHelper.js';

import UserModel from './components/user/model.js';
import createUser from './components/user/renderer.js';
import initUser from './components/user/initializer.js';


const nCopywriters = document.querySelector('.copywriters');

loadUsers();


async function loadUsers() {
    let copywriters = await loadJson(usersUrl);

    for (let copywriter of copywriters) {
        
        let userModel = new UserModel({
            id: copywriter.id,
            name: copywriter.name,
            username: copywriter.username,
            address: copywriter.address,
            email: copywriter.email,
            phone: copywriter.phone,
            website: copywriter.website
        });

        let nCopywriter = createUser(userModel);
        initUser(nCopywriter, userModel);

        nCopywriters.append(nCopywriter);
    }
}
