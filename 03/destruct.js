const user = {
    name: 'Вася',
    ontologicalStatus: "Лох",
    sexualStatus: 'Пидр',
    teeth: 23
}

const { name, ontologicalStatus, sexualStatus } = user

console.log(name); // Вася
console.log(ontologicalStatus); // Лох
console.log(sexualStatus); // Пидр


const boys = ['Виталик-рогалик', 'Ulad The Jlob', 'Лаврик-гаврик']
const [vit, vlad] = boys

console.log(vit) // Виталик-рогалик
console.log(vlad) // Ulad The Jlob

const countTeeth = ({name, teeth}) => {
    if (!teeth) {
        return `User ${name} has no teeth in his mouth`
    }
    return `User ${name} has ${teeth} teeth`
}

console.log(countTeeth(user)) // User Вася has 23 teeth
