import { isNumber } from "util";

/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  /* your logic here...*/
  // if (isNaN(a) || isNaN(b)){
  //   return false
  // } else if (isFinite(a) || isFinite(b)){
  //   return false
  // } else {
  //   return a + b
  // }
  if(isNaN(a) || isNaN(b)){
    throw new Error();
  }
  else if(a == string || b == string) {
    throw new Error();
  } 
  else if(isNumber(a) && isNumber(b)){
    return a + b
  }
 
};

export default sum;
