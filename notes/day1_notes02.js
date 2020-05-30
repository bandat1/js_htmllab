/*
// Lab_01

// task_1
let a = 5, b = 10;
S = a * b;
P = 2 * a + 2 * b;

// task_2
let m = 100, h = 1.8;
I = h * 100 / m;

// task_3
let s = 2000000, per = 0.1, time = 12;
f_s = s * ((per/12) * (1 + (per/12)) ** (12*12) / ((1 + (per/12)) ** (12*12) -1))
//console.log(f_s)
f_s1 = (s + s * per) / (time*12);
console.log(f_s1);


// оператор if
let salary = 2e6;

if (salary > 9e4) {
	console.log("Let's work");
} else {
	console.log("Let's study");
}
// альтернатива - тернарный оператор
console.log(salary > 9e4 ? "Let's work" : "Let's study");

let day , menu;
switch( day ) {
	case 1: menu = 'chicken'; break;
	case 2: menu = 'nothing'; break;
	case 3: menu = 'carrot'; break;
	case 4: menu = 'wheat buck'; break;
	default: menu = 'protein'; break;
}
console.log(day, menu);


// Lab_2

// task_01

let a = 3243;

if (a % 2 == 0){
	console.log(`${a}: четное`)
} else {
	console.log(`${a}: нечетное`);
}

// task_02

let N = 1, w = "товаров";

if ( N % 100 <= 5 || N % 100
if (((n == 1) || (n % 10 == 1)) && (n != 11)) {
	console.log('товар');
} else {
	if (((n % 2 == 0) && ()) {
		console.log("товара");
	} else {
		cosole.log("товар");
	}
}
	
let price = 100; k; day;
switch(day) {
	case 'Пн': k = 1.1; break;
	case 'Вт': k = 1.7;
	case 'Ср': k = 1.3;
	case 'Чт': k = 2;
	case 'Пт': k = 1.5;



let i = 0, str = '';
//while (i < 10) {
	i++;
	str += '*\n';
}
console.log(str);

console.clear();
for (var k = 0; k < 10; k++){
	console.log(k);
}

let d = 8;
do{
	d++;
	console.log(d);
}while(d<10);

*/
/*
// lab03

// task01
console.clear();
for (var k = 1; k < 21; k++){
	console.log(k);
}

// task02
console.clear();
for (var k = 1; k < 21; k++){
	if (k % 2 == 1){
		console.log(k);
}
}

// task03
console.clear();
for (var k = 1; k < 21; k++){
	console.log(k**2);
}

// task04
console.clear();
for (var k = 1; k < 11; k++){
	console.log(k * 8);
}

// task05. Сформировать строку из HTML-тегов для таблицы размером 10 на 10.
console.clear();
var n=10;
var i=1;
console.log('<table>');
while (i <= n){
    console.log('<tr>');
    var j=1;
    while(j <= n){
        console.log('<td>');
        console.log('</td>');
        j++;}
    console.log('</tr>');
    i++;}
console.log('</table>');


const ROWS = 10;
const COLS = 10;
let table = '<table>';
for(let i = 0; i < ROWS; i++){
	table += '<tr>';
	for(let j = 0 j < COLS; j++){
		table += '<td>';
		table += `${i}<sup;
table += '</table>';
console.log(table);
document.write(table);
*/









