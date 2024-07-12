// import { Login, User } from './interfaces';

import * as UserLogin from './interfaces';

class Employee implements UserLogin.Login {
    #id: number

    protected name: string

    address: string;

    get empId(): number {
        return this.#id
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployementCount(): number {
        return 30
    }

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): UserLogin.User {
        return {
            name: "ibrahim",
                id: 1,
                    email: 'crowwnzz3@gmail.com'
        }
    }

    getNameWithAdress(): string {
        return `${this.name} stays at ${this.address}`
    }
}

let john = new Employee(1, 'Jhon', 'Highway 71');

john.empId = 100;
console.log(john.empId)

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address)


    }

    // getNameWithAdress():string{
    //     return `${this.name} is a manager at ${this.address}`;
    // }
}

let address = john.getNameWithAdress();

console.log(address)

let mike = new Manager(2, "mike", "italy");


console.log(mike.getNameWithAdress())


