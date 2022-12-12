const objA = {
    a: 56,
    b: "Oh yeah!"
}
const objB = objA;

objA.a = 15;
console.log(objB); // { a: 15, b: 'Oh yeah!' }

objA.c = 'C';
console.log(objB) // { a: 15, b: 'Oh yeah!', c: 'C' }

delete objA.b;
console.log(objB); // { a: 15, c: 'C' }

const pop = 'jop';
objA[pop] = true;
console.log(objB); // { a: 15, c: 'C', jop: true }

objA.fun = () => console.log('LOG');
objB.fun();

try {
    objB.a(); // TypeError
} catch (e) {
    console.log(e);
}

const name = 'Ivan';
const age = 23;
const objC = {
    name, age
}
console.log(objC); // { name: 'Ivan', age: 23 }


// COPY OBJECT

objA.nested = {
    a: 40
}
// First way
const copyOne = Object.assign({}, objA);
copyOne.a = 67;
copyOne.nested.a = 33;
console.log(objA.a); // 15
console.log(copyOne.a); // 67
console.log(objA.nested); // { a: 33 }
// Second way
const copyTwo = {...objA};
copyTwo.a = 32;
copyTwo.nested.a = 44;
console.log(objA.a); // 15
console.log(copyTwo.a); // 32
console.log(objA.nested); // { a: 44 }
// Third way
const copyThree = JSON.parse(JSON.stringify(objA));
copyThree.a = 16;
copyThree.nested.a = 55;
console.log(objA.a); // 15
console.log(copyThree.a); // 15
console.log(objA.nested); // { a: 44 }