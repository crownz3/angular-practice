 function sum(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(sum(3, 3))

const sub = (num1: number, num2: number, num3 = 3): number => num1 - num2 - num3;

console.log(sub(166, 134));

const mult = function (num1: number, num2: number, ...nums: number[]): number {
    return num1 * num2 + nums.reduce((a, b) => a + b, 0);
}

let numArr = [3, 6, 32, 6]

console.log(mult(5, 9, ...numArr))

function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items,items)
}


const concatResult = getItems<number>([1,2,3,4,5]);

console.log(concatResult)

const concatString = getItems(['a','p','p','l','e']);
