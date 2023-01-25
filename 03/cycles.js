// ------------------------ FOR ------------------------
const arr = ['first', 'second', 'third']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ------------------------ FOR EACH ------------------------
arr.forEach((el, i) => console.log(`${i}: ${el}`));


// ------------------------ WHILE ------------------------
i = 0;
while (i > 5) {
    console.log(i); // will not be executed
}

// ------------------------ DO WHILE ------------------------
do {
    console.log(i); // will be executed 1 time
} while (i > 5);

const user = {
    rank: "Царь",
    name: "Иван",
    surname: "Васильевич",
    dignity: "Грозный",
}

// ------------------------ FOR IN ------------------------

/*
   rank: Царь
   name: Иван
   surname: Васильевич
   dignity: Грозный
   */
// First way
for (const key in user) {
    console.log(key + ':', user[key]);
}
// Second way
Object.keys(user).forEach(k => console.log(k + ':', user[k]));


/*
   0: first
   1: second
   2: third
   */
for (const key in arr) {
    console.log(key + ":", arr[key]);
}


// ------------------------ FOR OF ------------------------
const goodWord = 'XYI';
/*
    X
    Y
    I
*/
for (const l of goodWord) {
    console.log(l);
}

/*
   0: first
   1: second
   2: third
   */
for (const a of arr) {
    console.log(a);
}

const obj = {a: 10, b: 11}
// TypeError: obj is not iterable
for (const o of obj) {
    console.log(o);
}