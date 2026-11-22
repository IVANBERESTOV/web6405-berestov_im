class AuthData {
    constructor(login, password, agreement) {
        this.login = login;
        this.password = password;
        this.agreement = agreement;
    }

    printFormatted() {
        console.log(`Логин: ${this.login}`);
        console.log(`Пароль: ${this.password}`);
        console.log(`Согласие: ${this.agreement ? "Да" : "Нет"}`);
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const login = this.elements["login"].value;
    const password = this.elements["password"].value;
    const agreement = this.elements["agreement"].checked;

    const userAuth = new AuthData(login, password, agreement);
    userAuth.printFormatted();
});
