function fn(a) {
    console.log(a);
}

const b = true;
let c = 10;

fn(2 + 4); // expression
fn(b); // expression
fn(c = c + 1); // expression
// BUT! c = c + 1 // instruction
// fn(let d = 5) // instruction