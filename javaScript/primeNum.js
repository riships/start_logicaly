const prompt = require('prompt-sync')();

// Get the number from the user
const num = parseInt(prompt('Enter a number: '));

var isPrime = true;

if (num === 1) {
    isPrime = false;
} else if (num > 1) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}
