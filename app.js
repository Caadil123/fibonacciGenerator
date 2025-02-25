function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output.push(0);
  } else if (n === 2) {
    output.push(1);
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      // before loop the array is this: [0,1]
      output.push(output[output.length - 2] + output[output.length - 1]);
      // after the first iteration the array is this: [0,1,1]
      // after the second iteration the array is this: [0,1,1,2]
      // after the third iteration the array is this: [0,1,1,2,3]
    }
  }
  return output;
}

var output = fibonacciGenerator(5);
console.log(output);
