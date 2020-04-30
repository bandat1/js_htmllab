//декларативный
function myfunc(a = 10,b = 20){
  var c = a + b;
  return c;
}
console.log( myfunc(1,3) );
console.log( myfunc(1) );
console.log( myfunc() );
 
//функциональный / ф-я-выражение
const myfunc2 = function(a, b){
   return a - b; 
}
console.log( myfunc2(1,3) );
console.log( myfunc2 );
 
/*var weapon;
 
weapon = function(){
  console.log('knife: вжик вжик')
}
function pistole(){
  console.log('pistole: пиф паф')
}
weapon = pistole;
 
weapon();*/
 
 
//let mul = (a, b) => a * b;
let mul = (a, b) => {
  return a * b
};
 
let plus1 = a => a + 1;
console.log( plus1(10) )
 
/*const foo = a => b => c => a + b + c;
console.log( foo(10)(20)(30) )*/
 
function foo(a){
  return function(b){
      return function(c){
          return a + b + c;
      }
  }  
}
console.log( foo(10)(20)(30) );
 
function foo2(a){
  function foo3(b){
      function foo4(c){
          return a + b + c;
      }
      
      return foo4;
  }        
    
  return foo3;
}
 
 
/* Напишите функцию counter, которая при каждом вызове возвращает число на единицу большее предыдущего */
 
/*function makeCounter(i = 0){    
   return function(){
       return ++i;
   } 
}
 
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());*/
 
 
/*let counter = (function (i = 0){    
   return function(){
       return ++i;
   } 
})();
console.log(counter());
console.log(counter());
console.log(counter());
*/
let counter = ((i = 0) => () => ++i)();
console.log(counter());
console.log(counter());
console.log(counter());
 
console.clear();
function sum(){
  console.log(arguments.length); //4
  console.log(arguments[2]); //8
  console.log(arguments.callee)
  
  let result = 0;
  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}
//               0 1 2  3
console.log( sum(5,5,8,10) );
