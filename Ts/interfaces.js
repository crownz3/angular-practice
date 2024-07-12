"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    name: "ibrahim",
    id: 1,
    email: 'crowwnzz3@gmail.com'
};
let user2 = {
    name: "ibrahim",
    id: 1,
    email: 'crowwnzz3@gmail.com',
    salary: 32000
};
let { name, email } = { name: "ibrahim", id: 1, email: 'crowwnzz3@gmail.com' };
let [user, ...restuser] = [{ name: "ibrahim", id: 2, email: 'crowwnzz3@gmail.com' }, { name: "ibrahim1", id: 1, email: 'crowwnzz3@gmail.com' }, { name: "ibrahim3", id: 3, email: 'crowwnzz3@gmail.com' }];
console.log(user);
console.log(restuser);
