function primeNumber(number) {
  // assume the number inputted is a prime number
  let primality = true;

  // check whether number ends with 0, 2, 4, 5, 6, or 8 digit
  let lastDigit = number % 10;
  let composites = [0,2,4,5,6,8];
  if (composites.includes(lastDigit)) {
    primality = false;
  }

  // check whether digit's sums to a number divisible by 3
  let digits = Array.from(number.toString()).map(Number);
  let sum = digits.reduce((a, b) => a + b, 0)

  if (sum % 3 == 0) {
    primality = false;
  }
  
  // check primality status
  if (primality == true) {
    return (true);
  } else {
    return (false);
  }
}
module.exports = primeNumber;
