//task 01
/*Создайте объект city1 (var city1 = {}), 
укажите у него свойства name (название города, строка) 
со значением «ГородN» и population (населенность города, число) со значением 10 млн.*/
var city1 = {
	name: "ГородN",
	population: "10млн",
	getName: function(){
		console.log(this.name)
	},
	exportStr: function(){
		for(var v in this){
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
	console.log(this.name)
	},
	exportStr: function(){
		for(var v in this){
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