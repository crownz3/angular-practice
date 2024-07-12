export interface User {
    name: string;
    age?: number;
    id: number;
    email: string
}

let user1: User = {
    name: "ibrahim",
    id: 1,
    email: 'crowwnzz3@gmail.com'
}

interface xUser extends User {
    salary: number;
}

let user2: xUser = {
    name: "ibrahim",
    id: 1,
    email: 'crowwnzz3@gmail.com',
    salary: 32000
}


export interface Login {
    login(): User
}


let { name, email }: User = { name: "ibrahim", id: 1, email: 'crowwnzz3@gmail.com' };

let [user,...restuser]:User[]=[{ name: "ibrahim", id: 2, email: 'crowwnzz3@gmail.com' },{ name: "ibrahim1", id: 1, email: 'crowwnzz3@gmail.com' },{ name: "ibrahim3", id: 3, email: 'crowwnzz3@gmail.com' }]

console.log(user)
console.log(restuser)