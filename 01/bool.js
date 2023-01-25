console.log(Boolean(false)) // false
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false

console.log(Boolean(true)) // true
console.log(Boolean(1)) // true
console.log(Boolean(2)) // true
console.log(Boolean(1000000)) // true
console.log(Boolean('a')) // true
console.log(Boolean({dickSize: 3.5})) // true

console.log('Lube it' && 'Penetration'); // Penetration
console.log(0 && 'Penetration'); // 0
console.log('Lube it' || 'Penetration'); // Lube it
console.log('' || 'Penetration'); // Penetration

let b;
b && console.log('Yessss!') //
b = 10;
b && console.log('Yessss!') // Yessss!
