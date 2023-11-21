// Check if a command-line argument is provided
if (process.argv.length <= 2) {
    console.log("Please provide a number as a command-line argument.");
    process.exit(1);
}

// Get the number from the command-line argument
const num = parseInt(process.argv[2]);

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
