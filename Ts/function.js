"use strict";
function sum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(sum(3, 3));
const sub = (num1, num2, num3 = 3) => num1 - num2 - num3;
console.log(sub(166, 134));
const mult = function (num1, num2, ...nums) {
    return num1 * num2 + nums.reduce((a, b) => a + b, 0);
};
let numArr = [3, 6, 32, 6];
console.log(mult(5, 9, ...numArr));
function getItems(items) {
    return new Array().concat(items, items);
}
const concatResult = getItems([1, 2, 3, 4, 5]);
console.log(concatResult);
const concatString = getItems(['a', 'p', 'p', 'l', 'e']);
