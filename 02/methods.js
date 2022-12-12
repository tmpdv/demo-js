city = {
    name: 'Minsk',
    greetings: function () {
        return "Добро пожаловать в наш колхоз!";
    }
}
console.log(city.name + ': ' + city.greetings());

city = {
    name: 'Барановичи',
    // сокращенная запись function
    greetings() {
        return 'Добро пожаловать в наш божественный мегаполис!';
    }
}
console.log(city.name + ': ' + city.greetings());
