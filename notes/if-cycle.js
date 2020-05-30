let salary = 2e4;

if ( salary > 9e4 ){
 console.log('Работаем');
} else {
 console.log('Учимся');
}

console.log( salary > 9e4 ? 'Работаем' : 'Учимся');

let day = 4, menu;
switch( day ){
  case 1: menu = 'курица';   break; 
  case 2: menu = 'не надо';  break; 
  case 3: menu = 'морковка'; break; 
  case 4: menu = 'гречка';   break; 
  default: menu = 'протеин'; break; 
}
console.log(day, menu);