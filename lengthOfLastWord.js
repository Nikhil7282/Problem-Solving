var lengthOfLastWord = function (s) {
  let str = s.split(" ").filter((x) => x);
  return str[str.length - 1].length;
};

//without inbuilt function
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == " " && count > 0) {
      return count;
    } else if (s.charAt(i) !== " ") {
      count++;
    }
  }
  return count;
};
