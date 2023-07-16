let tmpArray = []
//响应式变化：
// 1、push():在数组后添加元素
tmpArray.push('aa')
tmpArray.push('1', '2', '3', '4', '5')
// 2、pop():删除数组中的最后一个元素
tmpArray.pop()
//3、shift():删除数组中的第一个元素
tmpArray.shift()
// 4、unshift(): 在数组最前面添加元素
tmpArray.unshift('1', '2')
// 5、splice 作用： 删除元素/插入元素/替换元素
//splice(start)
//splice(start,deleteCount)
//删除元素：第二个参数传入你要删除的几个元素(如果没有传，就删除后面所有的元素)
tmpArray.splice(2)
const start = 2;
tmpArray.splice(2, tmpArray.length - start)
//替换元素：第二个参数表示要替换几个元素，后面是用来替换前面的元素
tmpArray.splice(1, 3, 'm', 'n', 'l', 'x')
//插入元素：第二个参数传入0 ，后面跟上要插入的元素
tmpArray.splice(1, 0, 'x', 'y', 'z')

// 6、sort(): 排序
tmpArray.sort()

// 7、reverse(): 数组反转
tmpArray.reverse()

// 注意：通过索引值修改数组中的元素 不是响应式的,如果非要使用可以使用splice,他可以响应式的去替换所有值
tmpArray[0] = 'bbb'
tmpArray.splice(0, 1, 'bbb')
