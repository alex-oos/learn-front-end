//    编程范式：命令式编程/声明式编程
//    编程范式：面向对象编程（第一公民：对象 ）/函数式编程（第一公民是：函数）
//    filter/map/reduce
//    filter中的回调函数有一个要求：必须返回一个boolean值
//     true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//     false:当返回false时，函数内部会过滤掉这次的n
const nums = [10, 20, 111, 222, 444, 40, 50];

//1、filter函数的调用
//10,20,30,40
// let newNums = nums.filter(function (n) {
//     return n < 100
//
// });
let newNums = nums.filter(n => (n < 100))
// 两个等同，一个使用的箭头函数，另外一个没有使用而已
console.log(newNums);
// 2、map函数的调用
//20,40,80,100
let new2Nums = newNums.map(function (n) {
  return n * 2

});
console.log(new2Nums);
//3、reduce函数的调用
//reduce 函数对所有的内容进行汇总
let new3Nums = new2Nums.reduce(function (preValue, n) {
  return preValue + n;

}, 0);
console.log(new3Nums);
// 第一次：preValue 0  n 20
// 第二次：preValue 20 n 40
// 第三次： preValue 60 n 80
// 第四次 ： preValue 140 n 100
//最终： 240
// //    1、需求：取出所有小于100的数字
// let newNums = [];
// for (let n of nums) {
//     if (n < 100) {
//         console.log(n);
//         newNums.push(n);
//     }
// }
// console.log(newNums);
// // 2、需求：取出的数全部*2
//
// let new2Nums = [];
// for (let n of newNums) {
//     new2Nums.push(n * 2);
// }
// console.log(new2Nums);
// //3、需求：将new2Nums数字相加，得到最终的记过
// let total = 0;
// for (let n of new2Nums) {
//     total += n;
// }
// console.log('和为：', total);
