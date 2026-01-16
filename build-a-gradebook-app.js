function getAverage (arr) {
let arrSum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  arrSum += arr[i];
}
return arrSum / arr.length;
}

function getGrade (score) {
let result = "";
if (score <= 59 && score >= 0) {
    result = "F";
}
else if (score <= 69 && score >= 60) {
    result = "D";
}
else if (score <= 79 && score >= 70) {
    result = "C";
}
else if (score <= 89 && score >= 80) {
    result = "B";
}
else if (score <= 99 && score >= 90) {
    result = "A";
}
else if (score == 100) {
    result = "A+"
}
return result
}

function hasPassingGrade (score) {
return getGrade(score) !== "F";
}

function studentMsg (arr,score) {
  if (hasPassingGrade (score) == true) {
    return `Class average: ${getAverage (arr)}. Your grade: ${getGrade (score)}. You passed the course.`
  }
  else {
    return `Class average: ${getAverage (arr)}. Your grade: ${getGrade (score)}. You failed the course.`
  }
}



// проверки каждой функции
console.log(getAverage([10, 20, 30]));   // ожидаем 20
console.log(getAverage([0, 0, 0]));      // ожидаем 0
console.log(getAverage([5]));            // ожидаем 5
console.log(getAverage([-10, 10]));      // ожидаем 0
console.log(getGrade(0));    // F
console.log(getGrade(59));   // F
console.log(getGrade(60));   // D
console.log(getGrade(69));   // D
console.log(getGrade(70));   // C
console.log(getGrade(79));   // C
console.log(getGrade(80));   // B
console.log(getGrade(89));   // B
console.log(getGrade(90));   // A
console.log(getGrade(99));   // A
console.log(getGrade(100));  // A+
console.log(hasPassingGrade(59));  // false
console.log(hasPassingGrade(60));  // true
console.log(hasPassingGrade(75));  // true
console.log(hasPassingGrade(100)); // true

const scores = [80, 90, 70, 60];
console.log(studentMsg(scores, 95));
// passed
console.log(studentMsg(scores, 60));
// passed
console.log(studentMsg(scores, 40));
// failed