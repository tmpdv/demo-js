/**
 * async/await - это синтаксическая надстройка над промисами
 * await синтаксис возможен только внутри async функции
 * async функция всегда возвращает Promise
 * async функция ожидает результата инструкции await и не выполняет последующие инструкции
 */

const asyncFn = async (a) => {
    if (a < 0) {
        throw new Error("Fuck you!");
    }
    return a;
}

asyncFn(-1)
    .then(val => console.log(val))
    .catch(e => console.log(`Error raised! Very important message: ${e.message}`)); // Error raised! Very important message: Fuck you!


asyncFn(3)
    .then(val => console.log(val)) // 3
    .catch(e => console.log(`Error raised! Very important message: ${e.message}`));

async function assFuu() {
    const a = await asyncFn(10);
    console.log(a);
}

assFuu().then(); // 10

async function assFuu2() {
    try {
        const a = await asyncFn(-1);
        console.log(a);
    } catch (e) {
        console.log(e.message);
    }
}

assFuu2().then(); // Fuck you!

