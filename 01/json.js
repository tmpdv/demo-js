const vasyaJson = '{' +
    '"id":1,' +
    '"name":"Vasya",' +
    '"sex":"non-binary"' +
    '}';
const vasya = JSON.parse(vasyaJson);
console.log(vasya);

const katya = {
    id: 15,
    name: 'Katya',
    sex: 'male'
}
const katyaJson = JSON.stringify(katya);
console.log(katyaJson);