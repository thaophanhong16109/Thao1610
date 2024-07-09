// - Viết code giải phương trình bậc 1: ax+b=0 (a, b mình nhập sẵn, yêu cầu tính xem có nghiệm/vô nghiệm/vô số nghiệm, nếu có thể tính được x và xuất ra)
// - Phương trình bậc 1: ax+b=0
// nếu a=0, b=0 => PT có vô số nghiệm
// Nếu a=0, b≠0 => PT vô nghiệm
// Nếu a≠0, pt có 1 nghiệm duy nhất x = -b/a

var a = 8
var b = 9
if (a == 0 && b == 0) {
  console.log("PT có vô số nghiệm")
} else if (a == 0 && b != 0) {
console.log("PT vô nghiệm")
} else {
  console.log("PT có 1 nghiệm duy nhât x=" ,-b / a)
};

