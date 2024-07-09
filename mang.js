// Đếm số lượng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
var array = [10, 11, 12, -10, -11, -12]
var soDuong = 0;
for (var i = 0; i < array.length; i++) {
if (array[i] > 0) {
soDuong++;
}
}
console.log("số lượng số nguyên dương có trong mảng là " , soDuong)
// Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
var soAm = 0
var array = [10, 11, 12, -10, -11, -12];
for (var i = 0 ; i < array.length ; i++ ) {
  if (array[i] < 0)
  soAm++
}
console.log("số lượng số nguyên âm có trong mảng là " , soAm)
// Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
var soChan = 0
var array = [10, 11, 12, 13, 14, 15];
for (var i = 0 ; i < array.length ; i++) {
  if (array[i] % 2 == 0)
  soChan++
}
console.log("số lượng số chẵn có trong mảng là " , soChan)
// Đếm số lượng các số lẻ trong mảng arr = [10, 11, 12, 13, 14, 15]
var soLe = 0
var array = [10, 11, 12, 13, 14, 15];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 != 0)
  soLe++
}
console.log("số lượng số lẻ có trong mảng là", soLe)
// Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var max = array[0]
array = [10, 11, 12, 13, 14, 15]
for (var i = 1; i < array.length ; i++) {
  if (array[i] > max)
  max = array[i]
}
console.log("số lớn nhất trong mảng là" , max)
// Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var min = array[0]
array = [10, 11, 12, 13, 14, 15]
for (var i = 1; i < array.length ; i++) {
  if (array[i] < min)
  min = array[i]
}
console.log("số nhỏ nhất trong mảng là" , min)
// Tính tổng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
var array = [10, 11, 12, -10, -11, -12]
var soAm = 0
var sumSoAm = 0
for (var i = 0 ; i < array.length ; i++) {
  if (array[i] < 0)
sumSoAm = sumSoAm + array[i]
}
console.log("tổng các số dương có trong mảng là " , sumSoAm)
// Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12] 
var array = [10, 11, 12, -10, -11, -12]
var soDuong = 0
var sumSoDuong = 0
for (var i = 0 ; i < array.length ; i++) {
  if (array[i] > 0)
sumSoDuong = sumSoDuong + array[i]
}
console.log("tổng các số dương có trong mảng là " , sumSoDuong)