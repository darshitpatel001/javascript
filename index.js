// // const numbers = [10,22,44,66,88];

// // numbers.forEach (function(num,index,arr){
// //     console.log(num,index,arr);
// // })
// //  for ( i = 0; i < numbers.length; i++){
// //     console.log(numbers[i], i);
// //  }

// const age = 20;


//  if (age > 18) {
//    console.log('alowd');
// } 

// else if(age > 30){
//     console.log('not alowd');
// }
// else {
//     console.log('not ok');
// }

const person = {
    fname: "Darshit",
    lname: "Akbari",
    age: 19
};

for (let d in person) {
    console.log(person[d]);
}