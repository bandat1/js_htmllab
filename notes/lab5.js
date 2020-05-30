/*Написать функцию avg(), которая находит среднее арифметическое*/

/*function avg(){
  let result = 0, len = arguments.length;
  for(let i = 0; i < len; i++){
    result += arguments[i];
  }
  return result/len;
}
console.log( avg(5,5,8,10) );*/

function avg(...args){
  let result = 0, len = args.length;
  for(let i = 0; i < len; i++){
    result += args[i];
  }
  return result/len;
}
console.log( avg(5,5,8,10) );


/* * Создать функцию tag(tagName,content), которая принимает название HTML-тега в виде строки, а возвращает HTML-элемент с содержимым в виде текст из переменной content. Если переменная content является функцией, то результат её работы должен стать содержимым возвращаемой строки с HTML-элементом*/

function tag(tagName = 'div',content = ''){
  const text = typeof content == 'function' ? content() : content;  
  return `<${tagName}>${text}</${tagName}>`
}

console.log( tag('p', 'Ехал Грека через реку') );
console.log( tag('p', ()=> 'видит Грека в речке рак' ) );

const mark = function(txt){
  return tag('mark', txt)  
}
console.log( mark('Ехал Грека через реку') );

/* Создать функцию, которая правильно выводит фразу "N товаров" */

/*let quantuty = Math.round(Math.random()*100), word = "товаров";

function phrases(N, w){
  if( N % 100 <= 5 || N  % 100 >= 20 ){
    if( N % 10 == 1) w = "товар";
    if( N % 10 > 1 && N % 10 < 5) w = "товара";
  }
  return `${N} ${w}`;
}

console.log(phrases(quantuty, word));*/


let quantuty = Math.round(Math.random()*100), word = "товаров";

function phrases(N, w1, w2, w3){
  let w = w1;  
  if( N % 100 <= 5 || N  % 100 >= 20 ){
    if( N % 10 == 1) w = w2;
    if( N % 10 > 1 && N % 10 < 5) w = w3;
  }
  return `${N} ${w}`;
}

console.log(phrases(quantuty, "рублей", "рубль", "рубля"));



const log = (p) => {
 console.log(p)
}

log(21312);
log(21312);
log(21312);


















