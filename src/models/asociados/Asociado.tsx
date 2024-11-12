export default class Asociado {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public role: string;

    constructor(firstName: string, lastName: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}
