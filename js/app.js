// Arithmetic, Geometric or No pattern
// no negative numbers

function mathSequences(arr) {
 let arith = new Set();
 // let arith = [];

 let geo = new Set();
 // let geo = [];

 for (let i = 1; i < arr.length; i++) {
  let number01 = arr[i] - arr[i - 1];
  arith.add(number01)
  // arith.push(number01);

  let number02 = arr[i] / arr[i - 1];
  geo.add(number02)
  // geo.push(number02);
 }

 if (arith.size === 1) {
  return "Arithmetic"
 } else if (geo.size === 1) {
  return "Geometric"
 } else {
  return -1;
 }

 // console.log(arith);
 // console.log(`A: ${arith}`);
 // console.log(geo);
 // console.log(`G: ${geo}`);
}

console.log(mathSequences([2, 4, 6, 8]));
// "Arithmetic"
console.log(mathSequences([3, 9, 27]));
// "Geometric"
console.log(mathSequences([2, 5, 14, 89]));
// -1