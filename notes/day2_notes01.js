// декларативный способ описания функции
//функция может вызывать до ее объявления
console.clear()
function myfunc(a, b){
	var c = a + b;
	console.log(11);
	return c;
}
console.log(myfunc(a = 3, b = 4));

// task01
console.clear()
function square(width, height){
	var S = width * height;
	return S;
}
console.log(square(3, 4));

// task02
console.clear()
function sign(t){
	if(t > 0){
		return 1;
}	else {
		if(t < 0){
			return -1;
		}
		else {
			return 0
		}
}
}
console.log(sign(2));
a = sign;
console.log(a(4));

// task03

function ipoteka(S, p, n){
	var S, p, n;
	let s = 2000000, per = 0.1, time = 12;
	return S * ((p / 100 / 12 ) * (1 + (p / 100 / 12 )) ** (12 * 12) / ((1 + (p / 100 / 12 )) ** (12 * 12) - 1))
}
console.log(sign(2));

// функциональный стиль
//функция НЕ может вызывать до ее объявления
const myfunc2 = function(a, b){
	return a - b;
}
console.log(myfunc2(1, 3));


// стрелочные функции
console.clear();
var mul = (a, b) => a * b;
console.log(mul(1,2));

// области видемости
let t =4; 
function foo (q){ 
	q++; 
	t=t+5;
	}
foo(2);
// t будет равно 9

// замыкания
console.clear();
function makeCounter(i = 0){
	return function(){
		console.log(++i);
}
}
let counter = makeCounter();

// arguments
// argument[0] - calling elent
/*
function sum(){
	console.log(arguments.length);
	console.log(arguments[2]);
	console.log(arguments.callee);

	let result = 0;
	for(var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}
*/
//task01
console.clear();
avg = function(){
	var result = 0, summ = 0;
	for(var i = 0; i < arguments.length; i++){
		summ += arguments[i];
		result = summ / arguments.length;
	}
	return result;
}
console.log(avg(2, 3, 4, 7));

//task03
console.clear();



/*
var tagName = 'Opapapa', content = 'f1f1f1';
function tag(tagName, contant){
	return function(){
		
	}
}

*/

// свойства объекта. могут быть функциональными
var o = {
	firstName: 'Vasya',
	age: 23
};
o.lastName = 'Olegov';
o['proof'] = 'programmist';

console.log(o);
console.log(o['lastName']);
console.log(o.proof);

// методы объекта
var o = {
	firstName: 'Vasya',
	age: 23,
	say: function (){
		console.log(o.firstName)
	}
};
o.say()

// example
console.clear();
let student1 = {
  firstName: 'Альберт',
  lastName: 'Иванов',
  isProgrammer: true,
  age: 20,
  sing: function(){
    console.log('Ла-ла ленд')
    console.log(this.firstName)
  },
  say: function(){
     for(let kv in this){
        console.log(kv, this[kv]);
     }   
  }
}
let student2 = {
  firstName: 'Катя',
  lastName: 'Петрова',
  isProgrammer: false,
  age: 48,
  say: student1.say
}
/*student1.sing();
student1["sing"]();
console.log(student1);*/
student1.say();
student2.say();

//task01
function showProps(){
	for(var i in this){
		if(typeof this[i] != 'function'){
			console.log(`${i} = ${this[i]}`)
		}
	}
}

var book1 = {
	title: 'holly book',
	price: '1000 rub',
	showProps: showProps
}

var book2 = {
	title: 'not holly book',
	price: '800 rub',
	showProps: showProps
}
book1.showProps();
book2.showProps();

// task02


// копирование по ссылке

// Object.assign()
  

// lab07
// task01
console.clear();
var a1 = [4, 3, 7, 23, 11];
console.log(a1);

// task02
console.clear();
b = []
for(var i = 0; i < 105; i++){
	b[i] = Math.round(Math.random()*10, 1)
}
console.log(b);

// task03

// task04
var fib = [0, 1], n = 50;



