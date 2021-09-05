function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a , b) {
    return (a * b);
}

function divide(a , b) {
    return (a / b);
}

function increment(a) {
    return (a + 1);
}

function decrement(a) {
    return (a - 1);
}

function makeInt(a) {
    return (parseInt(a, 10));
}

function preserveDecimal(a) {
    return (parseFloat(a));
}

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);
    console.log(add(a, b));

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);
    console.log(subtract(a, b));

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);
    console.log(multiply(a, b));

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);
    console.log(divide(a, b));

a = Math.floor(Math.random() * 1000);
    console.log(increment(a));

a = Math.floor(Math.random() * 1000);    
    console.log(decrement(a));

a = Math.floor(Math.random() * 1000); 
    console.log(makeInt(a));

a = Math.floor(Math.random() * 1000);
    console.log(preserveDecimal(a));