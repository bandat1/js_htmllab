// task 1
/*Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».*/
function hello1(){
	console.log('Привет, JavaScript!');
}
hello1()

// task 2
/*Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и 
выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»*/
console.clear();
function hello2(name){
	var name;
	if(typeof name == 'undefined'){
		name = 'Гость'
	}
	console.log(`Привет, ${name}`);
}
hello2();

// task 3
/*Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.*/
console.clear();
function mul(n, m){
	S = n * m;
	return S
}
console.log(mul(21, 3));

// task 4
/*Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка*/
console.clear();
function repeat(str = "", n = 2){
	return str.repeat(n);
}
console.log(repeat('Obey', 5));

// task 5
/*Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». 
Если аргументы не заданы, считать их равными нулю. */
Не проверять переменные на тип данных
function rgb(a = 0, b = 0, c = 0){
	console.log(`rgb(${a}, ${b}, ${c})`); //return
}
rgb(2, 4, 33)

// task 6
/*Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).*/
console.clear();
avg = function(){
	var result = 0, summ = 0;
	for(var i = 0; i < arguments.length; i++){
		summ += arguments[i];
		result = summ / arguments.length;
	}
	return result;
}
console.log(avg(2, 3, 4));

// task 7
/*Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента, а 
возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), 
которая будет принимать одно значение, а вызывать  console.log() с этим значением. */
console.clear();
function m(a, b){
	var a, b;
	return mul(a, b)
}
console.log(m(7, 4));

function log(x){
	var x;
	return console.log(x)
}
log(m(2, 22));


