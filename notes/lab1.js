/*Дан прямоугольник с шириной 5 и высотой 10. Найти площадь и периметр прямоугольника*/
let 
  width  = 5 ,//ширина
  height = 10, //высота
  square = 0; //площадь

square = width * height;
console.log('Площадь: ' + square);  
console.log('Площадь: ', square);  
console.log(`Площадь: ${square}`);  
  

/*Найти индекс массы тела I, при массе человека 100кг, а его рост 1.8м*/
let I, weight = 100, h = 1.8;
I = weight / (h * h);
console.log(`BMI: ${I}`);  

/* * Найти аннуитетный платёж по ипотеке с телом кредита 2млн, под 10% на 12лет*/
let S = 2e6;
let p = 10;
let n = 12;
let A, overpayment;

p = p / (100 * 12); // p /= 1200 
n = n * 12;         // n *= 12

A = S * p / (1 - (1 + p) ** (-n));
overpayment = A * n - S;

console.log(`
  Платёж за месяц: ${Math.round(A)}руб.
  Переплата:  ${Math.round(overpayment)}руб.
`);  























