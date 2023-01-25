const val = -5;
let modus = val > 0 ? val : -val;

val && modus
    ? console.log(`Value = ${val}, modus = ${modus}`)
    : console.log('Value is not present');
