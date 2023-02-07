import fetch from 'node-fetch'

const f = fetch('https://jsonplaceholder.typicode.com/posts/1');
const jsonFetch = f.then(res => {
    console.log(res); // giant Response {...}
    return res.json();
});
const logFetch = jsonFetch.then(res => console.log(res));
const catchFetch = logFetch.catch(e => console.error(e));


// Promise { <pending> }
console.log(f);
console.log(jsonFetch);
console.log(logFetch);
console.log(catchFetch);


// Wrapper function for fetching data
const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => reject(e))
    )

getData('https://jsonplaceholder.typicode.com/posts/2')
    .then(data => console.log(data))
    .catch(e => console.error(e));

