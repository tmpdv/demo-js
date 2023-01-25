function printSomethingGood() {
    console.log('Хуеморган, хуеморган, хуууета!');
}

const printSomethingBad = function () {
    console.log('Плохой мальчик! шалунишка!');
}

const printWhatIWant = wiw => console.log(wiw);

setTimeout(printSomethingGood, 1500);
setTimeout(printSomethingBad, 1100);
setTimeout(printWhatIWant, 1000, 'Лёх! Пидр!');

const exponentiate = (value, exp = 2) => {
    exp = exp || 1;
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result = result * value;
    }
    return result;
}

console.log(exponentiate(3, 3)); // 27
console.log(exponentiate(6)); // 36

let user = {
    name: "Иван",
    ontologicalStatus: "в валенках",
    toString() {
        return `${this.name} ${this.ontologicalStatus}`;
    }
}

const newUserState = {
    name: "Федька",
    ontologicalStatus: "пошел нах"
}

const updateUser = (date = new Date()) => {
    user = {
        ...user,
        ...newUserState,
        updatedAt: date
    }
}

console.log(user.toString()); // Иван в валенках
console.log(user.updatedAt) // undefined
updateUser();
console.log(user.toString()); // Федька пошел нах
console.log(user.updatedAt) // current date