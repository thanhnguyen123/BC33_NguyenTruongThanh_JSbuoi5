/*Bài 1
 * Input: Diem cua 3 mon
 * Process:
 *    1.Tinh diem uu tien = diem khu vuc + diem doi tuong
 *      -Diem khu vuc A : +2;
 *      -Diem khu vuc B : +1;
 *      -Diem khu vuc C : +0.5;
 *      -Doi tuong 1 : 2.5;
 *      -Doi tuong 2 : 1.5;
 *      -Doi tuong 3 : 1;
 *      -Tong diem = Diem 3 mon + diem khu vuc + doi tuong
 *    2.Tong diem
 *Output: Tong diem
 */
function ex1() {
  var standardGrade = 23;
  var sub1 = 0;
  var sub2 = 10;
  var sub3 = 10;
  var area = "C";
  var studentType = "3";
  var areaGrade = calcAreaGrade(area);
  var studentTypeGrade = calcStudentTypeGrade(studentType);
  var result = sub1 + sub2 + sub3 + areaGrade + studentTypeGrade;
  if (result >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0) {
    console.log("totalGrade:", result, "=> Pass");
  } else {
    console.log("totalGrade:", result, "=> Fall");
  }
}
ex1();

function calcAreaGrade(area) {
  if (area === "A") {
    return 2;
  }
  if (area === "B") {
    return 1;
  }
  if (area === "C") {
    return 0.5;
  }
  return 0;
}
function calcStudentTypeGrade(studentType) {
  if (studentType === "1") {
    return 2.5;
  }
  if (studentType === "2") {
    return 1.5;
  }
  if (studentType === "3") {
    return 1;
  }
  return 0;
}


/* Bài 2:
 * Input: Tên và số KW
 * Process: Tính tiền theo số KW 
 *    50kw đầu: 500d/kw
 *    50kw kế: 650d/kw
 *    100kw kế: 850d/kw
 *    150kw kế: 1100d/kw
 *    Còn lại: 1300d/kw
 *Output: Số tiền đã xử lý 
 */
function payment() {
  var host = "Steve";
  var kw = 400;
  var total;
  if (kw <= 50) {
    total = 500 * kw;
  } else if (kw <= 100) {
    total = 500 * 50 + (kw - 50) * 650;
  } else if (kw <= 200) {
    total = 500 * 50 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    total = 500 * 50 + 650 * 50 + 850 * 100 + (kw - 200) * 1100;
  } else {
    total = 500 * 50 + 650 * 50 + 850 * 100 + 150 * 1100 + (kw - 350) * 1300;
  }
  console.log("Họ và tên:",host);
  console.log("Tiền điện là:",total);
}
payment();

