const vasya = {
    name: 'Vasya',
    age: 33
}

const iban = {
    ...vasya,
    ontologicalStatus: 'iban'
}

console.log(iban); // { name: 'Vasya', age: 33, ontologicalStatus: 'iban' }
