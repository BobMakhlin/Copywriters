class UserInfoTableModifier {
    constructor(name, username, address, email, phone, website) {
        this.name = name;
        this.username = username;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }

    applyFor(table) {
        let tdName = table.querySelector('.selected-copywriter__name');
        tdName.innerText = this.name;

        let tdUsername = table.querySelector('.selected-copywriter__username');
        tdUsername.innerText = this.username;

        let tdAddress = table.querySelector('.selected-copywriter__address');
        tdAddress.innerText = `${this.address.city}, ${this.address.street}`;

        let tdEmail = table.querySelector('.selected-copywriter__email');
        tdEmail.innerText = this.email;

        let tdPhone = table.querySelector('.selected-copywriter__phone');
        tdPhone.innerText = this.phone;

        let tdWebsite = table.querySelector('.selected-copywriter__website');
        tdWebsite.innerText = this.website;
    }
}
