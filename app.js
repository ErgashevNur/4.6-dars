// let n = 7;
// let a = 3;
// let b = 5;

// let result = [];
// result[0] = a;
// result[1] = b;

// // console.log(result)

// for (let i = 0; i < n; i++) {
//   let counter = 0;
//   for (let k = 0; k < result.length; k++) {
//     counter += result[k];
//   }

//   result.push(counter);
// }

// Array10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let n = arr.length;

// for (let i = 0; i < Math.ceil(n / 20); i++) {
//   if (i < n) {
//     console.log(arr[i]);
//   }
//   if (n - 1 - i > i) {
//     console.log(arr[n - 1 - i]);
//   }
// }

// Uyga vazifa

// 1
// function numbers(a, b) {
//   return a + b;
// }
// let num = numbers(10, 20);
// console.log(num);

// 2
// function numbers(minut) {
//   return minut * 60;
// }
// let num = numbers(20);
// console.log(num);

// 3
// function numbers(a) {
//   return a + 1;
// }
// let num = numbers(10);
// console.log(num);

// 4
// function numbers(a, b) {
//   return (a * b) / 2;
// }
// let num = numbers(10, 20);
// console.log(num);

// 5
// function numbers(a) {
//   return a * 365;
// }
// let num = numbers(10);
// console.log(num);

// 6
// function numbers(a) {
//   return a * a * a;
// }
// let num = numbers(10);
// console.log(num);

// 7
// function numbers(a) {
//   return a[0];
// }
// let num = [10, 20, 30, 40];
// console.log(numbers(num));

// 8
// function numbers(a, b) {
//   return a * b;
// }
// let num = numbers(10, 20);
// console.log(num);

// 9
// function numbers(a) {
//   return a * 3600;
// }
// let num = numbers(10);
// console.log(num);

// 10
// function numbers(a, b) {
//   return a * b - 1;
// }
// let num = numbers(10, 20);
// console.log(num);

// 11
// function numbers(a, b) {
//   return a % b;
// }
// console.log(numbers(90, 20));

// 12
// function S(a, b) {
//   return a * b;
// }
// console.log(S(10, 20));

// 13
// function number() {
//   let a = prompt("Ismingni kirit");
//   let b = "Something ";
//   return b + a;
// }
// console.log(number());

// 14
// function num() {
//   let a = prompt("Son kiriting");
//   return a * a;
// }
// console.log(num());

// 15
// function num() {
//   let a = prompt("Son kiriting");
//   if (a > 0) {
//     console.log("Folse");
//   } else if (a <= 0) {
//     console.log("True");
//   }
//   return a;
// }
// console.log(num());

// 16
// function num() {
//   let a = prompt("Burchaklar sonini kiriting");
//   return (a - 2) * 180;
// }
// console.log(num());

// 17
// function num() {
//   let a = prompt("Achko sonini kiriting");
//   let b = prompt("Achko sonini kiriting");
//   return a * 2 + b * 3;
// }
// console.log(num());

// 18
// function number() {
//   let a = prompt("Ismingni kirit");
//   let b = "Edabit";
//   return a + b;
// }
// console.log(number());

// 19
// function number() {
//   let a = parseInt(prompt("Ismingni kirit"));
//   let b = parseInt(prompt("Ismingni kirit"));
//   let son = 0;
//   son = a + b;

//   if (son <= 100) {
//     console.log("True");
//   } else if (son > 100) {
//     console.log("False");
//   }
//   return son;
// }
// console.log(number());

// 20
// function num() {
//   for (let i = 0; i <= a; i++) {
//     console.log(i);
//   }
// }
// let a = prompt("Son kiriting");
// console.log(num(a));

// 21
// function numbers(tovuq, qoy, sigir) {
//   let tuvuqOyogi = tovuq * 2;
//   let qoyOyoqlari = qoy * 4;
//   let sigirOyoqlari = sigir * 4;

//   return tuvuqOyogi + qoyOyoqlari + sigirOyoqlari;
// }
// console.log(numbers(10, 20, 24));

// 22
// function ifoda(i1, i2) {
//   i1 = prompt("True or False");
//   i2 = prompt("True or False");

//   return i1 && i2;
// }
// console.log(ifoda());

// 23
// function num() {
//   let a = parseInt(prompt("Son kiriting"));
//   let b = parseInt(prompt("Son kiriting"));

//   if (a == b) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
// console.log(num());

// 24
// function achko() {
//   let a = prompt("Necha marotaba yutilaring");
//   let b = prompt("Necha marotaba durrang bo'ldi");
//   let c = prompt("Necha marotaba yutqizdilaring");

//   return a * 3 + b * 1 + c * 0;
// }
// console.log(achko());

// 25
// function sekund() {
//   let s = prompt("Soat kiriting");
//   let m = prompt("Minut kiriting");
//   let num = s * 60 * 60;
//   let num1 = m * 60;

//   return num + num1;
// }
// console.log(sekund());
