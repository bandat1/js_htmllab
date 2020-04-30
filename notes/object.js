let student1 = {
  firstName: 'Альберт',
  lastName: 'Иванов',
  isProgrammer: true,
  age: 20,
  sing: function(){
    console.log('Ла-ла ленд')
    console.log(this.firstName)
  },
  say: function(){
     for(let kv in this){
        console.log(kv, this[kv]);
     }   
  }
}
let student2 = {
  firstName: 'Катя',
  lastName: 'Петрова',
  isProgrammer: false,
  age: 48,
  say: student1.say
}
/*student1.sing();
student1["sing"]();
console.log(student1);*/
student1.say();
student2.say();










