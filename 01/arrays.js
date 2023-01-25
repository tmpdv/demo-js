// __proto__: Array(0)
const array1 = [1, 2, 3];
const array2 = new Array(1, 2, 3);

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]
console.log(array1 === array2); // false
console.log(array1.length); // 3

// __proto__: Object
array3 = {
    1: 1,
    2: 2,
    3: 3,
    length: 3
}

console.log(array3); // { '1': 1, '2': 2, '3': 3, length: 3 }

console.log(array1[2]); // 3
console.log(array3[2]); // 2


array2.push('the element');
console.log(array2); // [ 1, 2, 3, 'the element' ]

console.log(array2.pop()); // the element
console.log(array2); // [1, 2, 3]

array2.unshift('DK');
console.log(array2); // [ 'DK', 1, 2, 3 ]


console.log(array2.shift()); // DK
console.log(array2); // [1, 2, 3]

array2.forEach(el => console.log(el * 2)); // 2 4 6

const doubledArray = array2.map(el => el * 2);
console.log(doubledArray); // [ 2, 4, 6 ]
console.log(array2); // [ 1, 2, 3 ]