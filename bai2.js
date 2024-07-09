// - Viết code giải phương trình bậc 2: ax^2+bx+c=0 (tính delta và biện luận có nghiệm, vô nghiệm, nghiệp kép, in kết quả)
// - PT bậc 2: ax^2+bx+c=0
// ∆ = b^2 - 4ac
// Nếu ∆ < 0 -> PT vô nghiệm 
// Nếu ∆ = 0 -> PT có 1 nghiệm kép x = -b/2a
// Nếu ∆ > 0 -> PT có 2 nghiệm pbiet: x1 = (-b -√∆)/2a và x2 = (-b+√∆)/2a

var a = 8
var b = 4
var c = 2
var delta = (b * b) - (4 * a * c)
if (delta < 0) {
  console.log("PT vô nghiệm")
} else if (delta == 0) {
  console.log("PT có 1 nghiệm kép x =", -b / (2*a))
}else {
  console.log("PT có 2 nghiệm phân biệt x1 = ", (- b - Math.sqrt(delta)/(2 * a )) & "x2 = " , (- b + Math.sprt(delta) / (2 * a)))
};