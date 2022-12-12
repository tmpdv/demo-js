let a = 5;
function fn() {
    function innerFn() {
        console.log(a);
    }
    innerFn();
}
fn(); // 5

let b;
function fun() {
    a = 12;
    let b;
    b = false;
    console.log(b); // false
}
fun();
console.log(a); // 12
console.log(b); // undefined