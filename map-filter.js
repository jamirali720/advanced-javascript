// const numbers = [ 2, 3, 5, 6, 7, 8, 9 ];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);   
// }


// const numbers = [ 2, 3, 5, 6, 7, 8, 9 ];
// // for (let i = 0; i < numbers.length; i++) {
// //       const element = numbers[i];

// function squire(element){
//     return element * element;
// }
//  const result =   numbers.map(function (element) {
//     return element ;
   
// })
// console.log(result)


// const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9];
// const squire = [];
// // numbers.forEach(function (x) {
// //     const result = x * x;
// //     squire.push(result)
// // })
// // console.log(squire)
// numbers.forEach(function (x) {
//     squire.push( x * x);
    
// })
// console.log(squire)

// const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9];
// const squireNumbers = numbers.map(function(x){
//     return x * x;
// })
// console.log( squireNumbers)

// const array = [4, 16,37, 18,9, 20, 30, 10];
// // const multi = array.map(function(a){
// //     const  num = a * 20;
// //     return num;
// // })
// // console.log(multi);
// const number = array.filter(function(x){
//     return x > 9;
// })
// console.log(number);

// const array = [ 30,20,35, 15,  36, 37, 10, 39, 50];
// const subtract = array.filter(function(num){
//     return num <30;
// })
// console.log(subtract[2]);


const students = [
    {id:20, name:"jamir ali"},
    {id:22, name:"jamal uddin"},
    {id:23, name:"kamaluddin"},
];

// const names = students.map(s => s.name);
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const addname = name  + ',  how are you ?';
//     console.log(addname)
    
// }
const ids = students.map(s => s.id);
console.log(ids);


const bigger = students.filter(s => s.id>20);
console.log(bigger);

const biggerOne = students.find(s => s.id>20);
console.log(biggerOne);