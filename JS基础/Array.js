//Array  对象常用的方法／属性
//10个
/**
 * length
 * concat() 返回一个新数组，这个新数组是由两个或更多数组组合而成的.
 * splice(index,howmany,element1,.......,emelentX) 从一个数组中移除一个或多个元素，如果必要，在所移除元素的位置上插入新元素，返回所移除的元素。 
        //splice() 方法用于插入、删除或替换数组的元素。
        //插入和替换返回的事操作后的原数组。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
        index:  下标。从哪里开始操作
        homany: 必需。规定应该删除多少元素。必须是数字，但可以是 "0"。
			如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
		element1	可选。规定要添加到数组的新元素。从 index 所指的下标处开始插入。
		elementX	可选。可向数组添加若干元素。
 * slice() 返回一个数组的一段
 *
 * 注释：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
 *
 * 
 * reverse() 返回一个元素顺序被反转的Array对象。 原数组反转
 * soft() 返回一个元素已经进行了排序的Array对象
 * join() 返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来
 * pop()  移除数组中的最后一个元素并返回该元素
 * push() 将新元素添加到一个数组中，并返回数组的新长度值
 * shift()移除数组中的第一个元素并返回该元素
 * unshift()将指定的元素插入数组开始位置并返回该数组
 * 
 */

//--------------------------------------------------------
console.group('test-length');
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length); //6

//手动修改length值
arr.length = 2;
console.log(arr); //[1, 2]
console.log(arr.length); //2

arr.length = 10;
console.log(arr); //[1, 2]
console.log(arr.length); //10

console.groupEnd();

//--------------------------------------------------------
console.group('test-create');
var arr2 = new Array(10);
console.log(arr2); //[]
console.log(arr2.length); //10

var arr2 = new Array(undefined, undefined);
console.log(arr2); //[undefined, undefined]
console.log(arr2.length); //2

console.groupEnd();


//--------------------------------------------------------
console.group('test-concat');
var arr = [1, 2, [1, 2, 3, 4], 4];
var arr2 = [5, 6, 7, 8];

var arr3 = arr.concat(arr2);
console.log(arr3); // [1,2,[1,2,3,4],4,5,6,7,8];
var arr4 = arr.concat([5, 6, 7, 8]);
console.log(arr4); // [1,2,[1,2,3,4],4,5,6,7,8];

console.groupEnd();

//--------------------------------------------------------
console.group('test-splice');
var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];
//插入到对应的下标。后面的元素喜下标自动＋1;

console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]
arr.splice(2, 0, "William");
console.log(arr); //["George", "John", "William", "Thomas", "James", "Adrew", "Martin"]

var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];

console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]
arr.splice(2, 1, "William");
//从结果中看出，先执行的是删除操作；
console.log(arr); //["George", "John", "William", "James", "Adrew", "Martin"]


var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];

console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]
arr.splice(2, 7, "William");
//删除个数若超出。正常
console.log(arr); //["George", "John", "William"]


var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];

console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]
arr.splice(2, 1);
console.log(arr); //["George", "John", "James", "Adrew", "Martin"]

arr.splice(2, 10);
//删除个数超出
console.log(arr); //["George", "John"]

console.groupEnd();

//--------------------------------------------------------
console.group('test-slice');


var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"]

console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]

//[start,end) 前闭后开
var res0 = arr.slice(0, 1);
//从1开始截取到尾部
var res1 = arr.slice(1);
var res2 = arr.slice(2, 4);
var res3 = arr.slice(-1);
var res4 = arr.slice(-2);
var res5 = arr.slice(-1, -2);
var res6 = arr.slice(-2, -1);
var res7 = arr.slice(-3, -1);
var res8 = arr.slice(-3, 0);
var res9 = arr.slice(-3, 2);
var res10 = arr.slice(0, -2);
console.log(res0); //["George"]
console.log(res1); //["John", "Thomas", "James", "Adrew", "Martin"]
console.log(res2); //["Thomas", "James"]
console.log(res3); //["Martin"]
console.log(res4); //["Adrew", "Martin"]
console.log(res5); //[]
console.log(res6); //["Adrew"]
console.log(res7); //["James", "Adrew"]
console.log(res8); //[]
console.log(res9); //[]
console.log(res10); //["George", "John", "Thomas", "James"]
console.log(arr); //["George", "John", "Thomas", "James", "Adrew", "Martin"]


console.groupEnd();
//--------------------------------------------------------
console.group('test-reverse');

var arr = ["George", "John", "Thomas"];

console.log(arr); //["George", "John", "Thomas"]
var res1 = arr.reverse();
console.log(res1); //["Thomas", "John", "George"]

console.log(arr); //["Thomas", "John", "George"]


var arr = ["George", "John", ["1", "2", "3"], "Thomas"];
//结果表明 不支持深层反转。第一层反转
console.log(arr); //["George", "John",["1", "2", "3"], "Thomas"]
var res1 = arr.reverse();
console.log(res1); //["Thomas", ["1", "2", "3"], "John", "George"]

console.log(arr); //["Thomas", ["1", "2", "3"], "John", "George"]

var arr = [
	[1, 2],
	[2, 3],
	[3, 4],
	[4, 5],
	[5, 6],
	[6, 7]
];
//结果表明 不支持深层反转。第一层反转
//console.log(arr);//[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

var res1 = arr.reverse();
console.log(res1); //[[6,7],,[5,6],[4,5],[3,4],[2,3],[1,2]]

console.log(arr); //[[6,7],,[5,6],[4,5],[3,4],[2,3],[1,2]]

console.groupEnd();
//但reverse不够灵活，因此才有了sort()方法。
//
//--------------------------------------------------------
console.group('test-sort');
//在默认情况下，sort()方法按升序排列数组——即最小的值位于最前面，最大的值排在最后面。
//为了实现排序，sort()方法会调用每个数组项的toString()转型方法，然后比较得到字符串，以确定如何排序。
//即使数组中的每一项都是数组，sort()方法比较的也是字符串，如下所示：

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); //0,1,10,15,5
//这种排序方式在很多情况下都不是最佳方案。因此sort()方法可以接受一个比较函数作为参数，以便我们指定那个值位于那个值的前面。

//比较函数接受两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等，则返回0，如果第一个参数位于第二个之后则返回一个正数。


//记忆的方法。 只有return 正数 的时候才发生交换。
//两两比较。 如果升序，前面比后面大则需要交换。返回正数

//升序
function compare_up(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
//针对简单的number类型 (return 前减后就可以了)
/*function compare_up(value1, value2) {
	return value1 - value2;
}*/

//降序
function compare_down(value1, value2) {
	if (value1 < value2) {
		return 1;
	} else if (value1 > value2) {
		return -1;
	} else {
		return 0;
	}
}

var arr1 = [2, 3, 6, 4, 5, 1];
arr1.sort(compare_up);
console.log(arr1); //[1, 2, 3, 4, 5, 6]

var arr2 = [2, 3, 6, 4, 5, 1];
arr2.sort(compare_down);
console.log(arr2); //[6, 5, 4, 3, 2, 1]


var arr3 = ["Z", "John", ["Az3", "a46", "B3"], "Thomas","George"];



arr3.sort(compare_up);
console.log(arr3); //[6, 5, 4, 3, 2, 1]

//1.数组调用sort方法后，会影响本身(而非生成新数组)
//2.sort()方法默认是按字符来排序的，所以在对数字型数组排序时，不可想当然的以为会按数字大小排序！
//3.要改变默认的sort行为(即按字符排序)，可以自行指定排序规则函数(如本例所示)
//
console.groupEnd();

//--------------------------------------------------------
console.group('test-join');

var arr = [1,2,3,4,5,6,7,8];
var res = arr.join('-')
console.log(res);

console.groupEnd();
//--------------------------------------------------------
console.group('test-push-pop');
//模拟栈。
//把一个数组。最前面的看成栈底，最末尾看成是栈顶。
/* pop()  移除数组中的最后一个元素并返回该元素
 * push() 将新元素添加到一个数组中，并返回数组的新长度值
 */

var arr = [1,2,3,4,5,6,7,8];
arr.push(9);
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

var pop = arr.pop();
console.log(pop);//9
console.log(arr);//[1, 2, 3, 4, 5, 6, 7, 8]

var pop = arr.pop();
console.log(pop);//8
console.log(arr);//[1, 2, 3, 4, 5, 6, 7]

var pop = arr.pop();
console.log(pop);//7
console.log(arr);//[1, 2, 3, 4, 5, 6]

console.groupEnd();

//--------------------------------------------------------
console.group('test-push-shift');
//模拟队列 

/* shift()移除数组中的第一个元素并返回该元素*/


var arr = [1,2,3,4,5,6,7,8];

arr.push(9);
var shift = arr.shift();
console.log(shift);//1
console.log(arr); //[2, 3, 4, 5, 6, 7, 8, 9]


arr.push(10);
var shift = arr.shift();
console.log(shift);//2
console.log(arr);//[3, 4, 5, 6, 7, 8, 9, 10]

arr.push(11);
var shift = arr.shift();
console.log(shift);//3
console.log(arr);//[4, 5, 6, 7, 8, 9, 10, 11]

arr.push(12);
var shift = arr.shift();
console.log(shift);//4
console.log(arr);//[5, 6, 7, 8, 9, 10, 11, 12]

console.groupEnd();
//--------------------------------------------------------
console.group('test-unshift');
 /* unshift()将指定的元素插入数组开始位置并返回该数组*/
var arr = [1,2,3,4,5,6,7,8];
var unshift = arr.unshift(0);
console.log(arr);//[0, 1, 2, 3, 4, 5, 6, 7, 8]
console.groupEnd();