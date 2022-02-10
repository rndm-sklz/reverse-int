module.exports = function reverse (n) {
  return +(Math.abs(n).toString().split('').reverse().join(''));
  // return n < 0 ? +('-'+number) : +number;
}
