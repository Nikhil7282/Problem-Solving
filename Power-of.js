//power of two
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
  //recursion
  // if (n === 1) return true;
  // if (n < 1 || n % 2 !== 0) return false;
  // return isPowerOfTwo(n / 2);
};

//power of three
var isPowerOfThree = function (n) {
  if (n === 1) return true;
  if (n < 1 || n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);

  // return n>0 && (3**19)%n===0
};

//power of four
var isPowerOfFour = function (n) {
  if (n === 1) return true;
  if (n < 1 || n % 4 !== 0) return false;
  return isPowerOfFour(n / 4);
};
