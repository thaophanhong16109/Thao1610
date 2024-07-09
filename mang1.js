// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n
var sum = 0
var n = 20
for (var i = 0; i <= n; i++) {
  sum = sum + i
}
console.log("tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n = ", sum)
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
var n = 20
var sum = 0
for (var i = 0; i <= n; i++) {
  sum = sum + i/n
}
console.log("tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = ", sum)
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2
var sum = 0
var n = 3
for (var i = 0; i <= n; i++) {
  sum = sum + Math.pow(i,2)
}
console.log("tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2 = ", sum)
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
var sum = 0
var n = 2
for (var i = 0; i <= n; i++) {
  sum = sum + Math.pow(i,3)
}
console.log("tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3 = ", sum)

function calculateExpression(n) {

  let factorial = 1;

  for (let i = 1; i <= n; i++) {

    factorial = factorial * i;

  }

  const result = factorial + 120 + factorial / 2;

  return result;

}

console.log(calculateExpression(5))