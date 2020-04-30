//task 01
/*Создайте объект city1 (var city1 = {}), 
укажите у него свойства name (название города, строка) 
со значением «ГородN» и population (населенность города, число) со значением 10 млн.*/
var city1 = {
	name: "ГородN",
	population: "10млн",
	getName: function(){
		return this.name;
	},
	exportStr: function(){
		for(var v in this){
			if(typeof this[v] != 'function')
				console.log(v,'=',this[v])
		}
	}
}


//task 02
/*Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.*/
var city2 = {
	name: "ГородM",
	population: 1e6,
	getName: function(){
		return this.name;
	},
	exportStr: function(){
		for(var v in this){
			if(typeof this[v] != 'function')
				console.log(v,'=',this[v])
		}
}
}
//city2.getName();
city2.exportStr();


//task 03
/*Создайте у объектов city1 и city2 методы getName(), 
которые вернут соответствующие названия городов*/

//решение в коде task 01 и task 02

//task 04
/*Создайте методы exportStr() у каждого из объектов. 
Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». 
Для второго города будет строка со своими значениями. 
Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно*/

//решение в коде task 01 и task 02

// task 05
/*Создайте глобальную функцию getObj(), которая возвращает this. 
А у каждого из объектов city1 или city2 метод getCity, 
который ссылается на getObj. Проверьте работу метода. 
Примечание: к объекту вызова можно обратиться через this.*/

function exportStr(){
    for(let i in this){
        if(typeof this[i] != 'function'){
            console.log(`${i} = ${this[i]}`)
        }
        ;
    }
}

let city1 = {
    name: 'ГородN',
    population: 10e6, 
    exportStr: exportStr,
    getСity: getObj

}

let city2 = {
    name: 'ГородМ',
    population: 1e6,
    exportStr: exportStr,
    getСity: getObj
}

function getObj(){
    return name.this;
}

console.log(city1.getСity())


// task 7
/*Создайте массив d1 с числовыми величинами 45,78,10,3.  
Добавьте в массив d1 еще одно число ( d1[7] = 100). 
Выведите в консоль весь массив и его элементы с индексами 6 и 7.*/
d1 = [45, 78, 10, 3];
console.log(d1);
d1[7] = 100;
for(var i = 0; i < d1.length; i++){
	console.log(d1[i]);
}

// task 8
/*Создайте массив d2 с числовыми величинами 45,78,10,3. 
Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .*/
d2 = [45, 78, 10, 3];
var sum2 = 0;
for(var i = 0; i < d2.length; i++){
	sum2 += d2[i];
}
console.log(sum2);

// task 9
/*Создайте массив d3 с числовыми величинами 45,78,10,3. 
Добавьте в массив d3 еще одно число (например, d[7] = 100) 
Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.*/
d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for(var i in d3){
	sum3 += d3[i];
}
console.log(sum3);

// task 10
/*Создайте массив d4 с числовыми величинами 45,78,10,3. 
Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел. 
Вызовите d4.sort(my)*/
d4 = [45, 78, 10, 3];
function my(a, b){
	return a - b;
}
console.log(d4.sort(my));
