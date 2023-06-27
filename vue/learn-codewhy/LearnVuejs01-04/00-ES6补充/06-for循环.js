//1、for循环最普通的用法
let totalPrice = 0;
let books = [
  {id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 0, totalcount: 5},
  {id: 2, name: '《unix编程艺术》', date: '2006-2', price: 59.00, count: 1, totalcount: 5},
  {id: 3, name: '《编程珠玑》', date: '2008-10', price: 39.00, count: 1, totalcount: 5},
  {id: 4, name: '《代码大全》', date: '2006-03', price: 128.00, count: 1, totalcount: 5}
]
for (let i = 0; i < books.length; i++) {
  totalPrice += books[i].price * books[i].count;

}
// 2、（for (let  i in this.books） i 是books 的索引
for (let i in books) {
  console.log("books的索引：", i);
  totalPrice += books[i].price * books[i].count;
}
//3、（for (let item of this.books)）可以直接取出books里面的每个元素
for (let item of books) {
  totalPrice += item.price * item.count;
}
