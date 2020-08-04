const copywritersBlock = document.querySelector('.copywriters');

loadUsers();


async function loadUsers() {
    let copywriters = await loadJson(usersUrl);
    
    for (let copywriter of copywriters) {
        let user = new User(copywriter.id, copywriter.name);
        copywritersBlock.append(user.toHtmlNode());
    }
}
