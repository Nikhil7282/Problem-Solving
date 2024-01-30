var fib = function (n) {
  //iteration
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];

  //recursion
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
