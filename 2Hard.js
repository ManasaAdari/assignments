function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
           return false;
        }
    }
    return true;
}
const num1 = 16;
if (isPrime(num1)) {
    console.log(`${num1} is a prime number.`);
} else {
    console.log(`${num1} is not a prime number.`);
}
