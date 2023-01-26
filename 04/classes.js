let currentId = 0
class Poc {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.type = 'Loh'
    }

    setId() {
        if (!this.id) {
            this.id = ++currentId;
        }
    }

    static merge(poc1, poc2) {
        return `${poc1} ${poc2}`
    }
}

poc = new Poc('Вася', 22);
poc.setId();
console.log(poc); // Poc { name: 'Вася', age: 22, type: 'Loh', id: 1 }

console.log(typeof Poc.prototype); // object
console.log(Poc.prototype.constructor); // [class Poc]
console.log(typeof Poc); // function

console.log(poc.hasOwnProperty('name')); // true
console.log(poc.hasOwnProperty('setId')); // false
console.log(Poc.prototype.hasOwnProperty('setId')); // true
console.log(poc.hasOwnProperty('merge')); // false
console.log(poc.constructor.hasOwnProperty('merge')); // true

const obj = {}
console.log(obj.constructor); // [Function: Object]
console.log(typeof obj.constructor); // function

anotherPoc = new Poc('Кекс', 24);
anotherPoc.setId();

console.log(anotherPoc); // Poc { name: 'Кекс', age: 24, type: 'Loh', id: 2 }

console.log(Poc.merge(poc.name, anotherPoc.name)); // Вася Кекс


class SuperPoc extends Poc {
    setId() {
        if (!this.id) {
            this.id = 1000000 + ++currentId;
        }
    }
}

const superPoc = new SuperPoc('Петя', 25);
superPoc.setId();
console.log(superPoc); // SuperPoc { name: 'Петя', age: 25, type: 'Loh', id: 1000003 }

// field __proto__ contains instance of parent class
console.log(superPoc.__proto__) // Poc {}
console.log(poc.__proto__) // {}
