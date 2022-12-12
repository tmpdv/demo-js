let a = 10;
console.log(a++); // 10

a = 10;
console.log(++a); // 10

let b;
console.log(b); // undefined

let c = null
console.log(c); // null

let str = 'kolya';
let num = 1488;
console.log(str + num); // kolya1488

let num1 = 12;
let num2 = 34;
console.log(num1 + num2); // 46

num1 = '12';
console.log(num1 + num2); // 1234

try {
    console.log(ebs);  // ReferenceError
} catch (e) {
    console.log(e);
}

a = 10;
b = a;
b = 20;
console.log(b); // 20