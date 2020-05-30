/* Выведите все числа от 1 до 20 (включая границы) */
 
var i = 1;
while(i <= 20){
  console.log(i++);  
}
for(var i = 1; i <= 20; ++i){
  console.log(i); 
} 
 
/* Выведите все нечётные числа от 1 до 20 */
console.clear();
var i = 1;
while(i < 20){
  console.log(i);
  i += 2;
}

/* Выведите квадраты всех чисел от 1 до 20 */
console.clear();
var i = 1;
while(i <= 20){
  console.log(i * i);
  i++;
}

/* Выведите результаты умножения числа 8 на числа от 1 до 10
8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80 */

for(let i = 1, k = 8; i <= 10;i++){
  console.log(`${k} * ${i} = ${k * i}`)
}


/* * Сформировать строку из HTML-тегов для таблицы размером 10 на 10*/

const ROWS = 10;
const COLS = 10;
let table = '<table>\n';

for(let i = 0; i < ROWS; i++){
  table += '\t<tr>\n';
  for(let j = 0; j < COLS; j++){
    table += '\t\t<td>'; 
    table += `${i}<sup>${j}</sup>`; 
    table += '\t\t</td>\n';    
  }
  table += '\t</tr>\n';
}

table += '</table>';
console.log(table);
document.write(table);













