/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  let finiteArr = [];
  for(let i = 0; i < arr.length; i++){
    if(isFinite(arr[i])){
      finiteArr.push(arr[i]);
    }
  }
  return Math.max.apply(null, finiteArr);
};

export default max;
