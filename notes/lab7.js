/*Создайте массив из пяти чисел и выведите его элементы*/
let a = [9,9,1,4,5];
console.log(a);

/*Создайте массив из сто пяти случайных чисел и выведите его элементы*/
let b = [];
for(let i = 0; i < 105; i++){
   b[i] = Math.round(Math.random()*1000)
}
console.log(b)

/*Отсортируйте массив из 105 элементов*/
b.sort( (n,m) => n - m);
console.log(b);

/*Найдите 50 элементов последователности Фибоначчи*/
let fib = [0,1], n = 50;
for(let i = 2; i < n; i++){
   fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);

document.write("<ul>");
for(let i in fib){
  document.write('<li>' + fib[i]);    
}
document.write("</ul>");












