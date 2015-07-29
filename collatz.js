// if n is even --> n/2
// if n is odd --> 3n + 1

var array = [];

// FIRST SOLUTION
// function collatzSequence(num) {
//   while(num != 1) {
//     if(num % 2 == 0) {
//       array.push(num);
//       return collatzSequence(num/2);
//     } else if(num % 2 != 0) {
//       array.push(num);
//       return collatzSequence(num*3 + 1);
//     }
//   }
//   array.push(num);
//   return array;
// }

// console.log(collatzSequence(13));


// SECOND SOLUTION
function collatzSequence(num) {
  while(num != 1) {
    array.push(num);
    (num % 2 === 0) ? (num = num/2): (num = num*3 + 1);
    return collatzSequence(num);
  }
  array.push(num);
  return array;
}

console.log(collatzSequence(13));
