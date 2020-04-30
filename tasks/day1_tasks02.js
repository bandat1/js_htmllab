// task 1
/*Напишите оператор if, такой, чтобы в качестве выражения в скобках у него были значения true, false (Например, if( true ) или if( false )). 
Посмотрите как работает этот оператор, поместив какую-нибудь команду после круглых скобок (Например, console.log(1)). 
Примечание: это задание очень простое. Если вы читая его, поняли суть, не выполняйте его 🙂*/

// task 2
/*Создайте переменные m и n. В m поместите произвольное числовое значение. 
Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово «большое», иначе — слово «маленькое».*/
var m = 0, n = '';
m = 49;
if (m > 50) {
	n = 'большое',
	console.log(`n: ${n}`);
} else {
	n = 'маленькое',
    console.log(`n: ${n}`);
}

// task 3
/*Определите сколько раз выполнится цикл while? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.
var i = 2;
while( i < 9 ){
 console.log( i++ );
}*/
var i = 2;
while( i < 9 ){
 console.log( i++ );
}

// task 4
/* Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.*/
console.clear();
var i = 44;
while(i<68){
	console.log(i++);
}

// task 5
/*Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.*/
console.clear();
var i = 45;
while (++i <= 670) {
	if (i % 10 == 0){
		console.log(i);
	}
}

// task 6
/*Напишите скрипт, который используя оператор for выполнит два предыдущих задания.*/
console.clear();
for(var i = 44, k = 68; i < k; i++){
	console.log(i);
}

console.clear();
for(var i = 45, k = 670; i <= k; i++){
	if (i % 10 == 0){
		console.log(i);
}
}

// task 7
/*Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, 
который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)
var n = 5;
switch( n ){
 //Напишите тут свой код
}*/
console.clear();
var n = 6;
switch( n ){
	case 0: console.log('zero'); break;
	case 1: console.log('one'); break;
	case 2: console.log('two'); break;
	case 3: console.log('three'); break;
	case 4: console.log('four'); break;
	case 5: console.log('five'); break;
	case 6: console.log('six'); break;
	case 7: console.log('seven'); break;
	case 8: console.log('eight'); break;
	case 9: console.log('nine'); break;
}
// task 8
/*Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)*/

// task 9
/*(*) В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. 
Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.*/
console.clear();
var size = 120, unit = "Мб";
switch(unit){
	case "Кб": sizeNew = size * 1024; break;
	case "Мб": sizeNew = size * 1024 * 1024; break;
	case "Гб": sizeNew = size * 1024 * 1024 * 1024; break;
}
console.log(sizeNew);		
	
	

// task 10
/*(*) Постройте при помощи циклов JavaScript скрипт для календаря на HTML. 
Примечание: выполнить задание для одного месяца, используя HTML-элемент table*/