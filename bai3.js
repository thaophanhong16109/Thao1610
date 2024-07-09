// - Viết code nhập vào độ dài 3 cạnh của 1 tam giác, in ra màn hình tam giác đó là loại tam giác gì (vuông, cân, đều, bình thường) 
//  - 3 cạnh tam giác a,b,c:
// Nếu a=b=c -> tam giác đều
// Nếu a=b≠c hoặc a=c≠b hoặc b=c≠a: tam giác cân
// Nếu a^2+b^2=c^2 (với a,b <= c) -> tam giác vuông 
// Còn lại là tam giác bth

var a = 1
var b = 1
var c = 1
if ( a==b  || a==c ) {
  console.log("là tam giác đều vì có 3 cạnh bằng nhau")
} else if ( a == b != c || a == c != b || b == c != a) {
  console.log("là tam giác cân ")
}else if (
(a * a) + (b * b) == (c * c) ||
(a * a) + (c * c) == (b * b) ||
(b * b) + (c * c) == (a * a)
) {
  console.log("là tam giác vuông")
}else {
  console.log("là tam giác thường")
}