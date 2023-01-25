const exponentiate = (value, exp = 2) => {
    if (value === undefined || value === null || typeof value !== 'number') {
        throw new Error(`Illegal value argument: ${value}`);
    }
    if (exp === undefined || exp === null || typeof exp !== 'number') {
        throw new Error(`Illegal exp argument: ${exp}`);
    }
    if (exp === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result = result * value;
    }
    return result;
}

try {
    exponentiate(0, 'fcuk')
} catch (error) {
    console.log(error); // Error: Illegal exp argument: fcuk

}
