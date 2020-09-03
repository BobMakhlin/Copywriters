
export default class UserModel {
    constructor({ id, name, username, address, email, phone, website } = {}) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}
