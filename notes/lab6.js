/*Создайте два объекта книга (book) со свойствами название книги (title), цена книги (price), методом showProps() - должен выводить информацию о книге. Заполните свойства объекта значениеми, вызовите метод объекта.*/
function showProps(){
  for(let i in this){
    if(typeof this[i] != 'function'){
       console.log(`${i} = ${this[i]}`)
    }
  }
}
let book1 = {
  title: 'JS за 24 часа',
  price: 150,
  showProps: showProps
}
let book2 = {};
book2["title"] = 'Как устроен JS'
book2.price = 800;
book2.showProps = showProps;

book1.showProps();
book2.showProps();



/*
Напишите функцию getProps(obj), которая принимает на вход объект, а выводит информацию по свойствам переданного объекта*/
function getProps(obj){
  for(let i in obj){
    if(typeof obj[i] != 'function'){
       console.log(`${i} = ${obj[i]}`)
    }
  }   
}

getProps(book1)
getProps(book2)




let user = {
  fname: 'Вася',
  lname: 'Васильев',
  toString: function(){
   let str = '';
   for(let i in this)
     str += this[i]+'\n'
   return str;
  }
}
console.log(user + '')



//book2 

function changePrice(delta){
  this.price += delta;
}

console.clear();
changePrice.apply(book2,[100]);
changePrice.call(book2,100);
book2.showProps();

const changeMyBook2 = changePrice.bind(book2)
changeMyBook2(500)
book2.showProps();









