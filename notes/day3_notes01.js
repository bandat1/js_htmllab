// конструктор - специальный метод класса, функции, вызываемые вместе с оператором new
/*{
	firstName: '',
	lasName: '',
	isProgramer: true
}*/

/*
//пример
function Student(fname, lname){
	this.firstName = fname;
	this.lastName = lname;
	
}
Student.prototype.showProps = function(){  // создается метод для конструктора
	for(let i in this){
		if(typeof this[i] != 'function')
			console.log(i, this[i])
	}
}   //

let st1 = new Student('Katya', 'Petrova');
let st2 = new Student('Katya', 'Sidorova');

let auditory = [];

auditory.push(st1);
auditory.push(st2);

//вывод данных
console.log(auditory);

auditory.forEach(student => {
	console.log(student)
}
);


//lab
function Cat(name, color, voice){
	this.name = name;
	this.color = color;
	this.voice = voice;
}

function SiamCat(){
	Cat.apply(this, [name, color, voice]); // применили родительский контруктор
	this.breed = 'siam'
}

let cat1 = new Cat('Tom', 'green', 'boo');
let cat2 = new Cat('Tom', 'white', 'meoww');

Cat.prototype.meow = function(){
	return this.voice;
}
let cats = [];
cats.push(cat1);
cats.push(cat2);

for(let i in cats){
	console.log(cats[i].meow());
}


// classes

class Cat{
	constructor(name, color, voice){
	this.name = name;
	this.color = color;
	this.voice = voice;		
	}
	meow(){
		return this.voice;
	}
}
class SiamCat extends Cat{
	constructor(){
		
	}
}
let cat1 = new Cat('Tom', 'green', 'boo');
let cat2 = new Cat('Tom', 'white', 'meoww');

// lab
class Goods{
	constructor(_title, _price){
		this._title = _title;
		this._price = _price;
	}
	get show(){
		for(let i in this)
			console.log(i, this[i])
}
}
goods = [];
var good1 = new Goods('Opa', 10202);
var good2 = new Goods('Apo', 123456);

goods.push(good1);
goods.push(good2);

class Phone extends Goods{
	constructor(_title, _price){
		super(_title, _price);
		this._type = 'смартфон';
	}
}

var phone1 = new Phone('fffg', 789);
*/

// строки
const log = (...p) => console.log(...p);
const s = 'Opa opapa ga ga';
const clear = () => {console.clear()};
{
log(s);
log(s.length);
s[5] = 'f';  // нельзя, не добавится, т.к. строки иммутабельны (immutable)
log(s[5]);

log(s.concat(' Cola'));
log(s);
clear();
}

log(s.search('re'));
log(s.charAt(0));

clear();
// расчет числа вхождений символов b в строку a в заданном диапазоне от c до d.
function substrCount(a, b, c, d){
	var a, b, c, d;
	b = b.slice(c, c + d);
	return b.split(a).length - 1;
}

var num = substrCount('re', 'ehal greka cherez reku', 5, 15);
log(num);

//JSON
/*
формат описания такой:
{
	"name": " ",
	"age": 20
}

let st1 = {name: 'Dasha', age: '20'};

let s11 = JSON.stringify(st1);
console.log( s11 );
console.log( typeof s);

*/
var dt = new Date();
var result;

dt = new Date('20 aug 2020');
dt = new Date(123456789);
dt = new Date(2020, 3, 24, 12, 57, 23);
//dt = new Date(202021); //вывод в секундах, если введено только одно число

console.log(dt.getTime());

function getDayDoHappyNewYear(){
	var curr = new Date();
	var year = curr.getFullYear();
	var next = year + 1;
	var hny = new Date(next, 0); //январь не 1971 года
	return (hny - curr) / (1000 * 60 * 60 * 24);
	
}
console.log(getDayDoHappyNewYear())
console.log(dt.getTimezoneOffset()); // в минутах (зависит от настроек в браузере)


console.log('привет' && 0 || 'мир'


