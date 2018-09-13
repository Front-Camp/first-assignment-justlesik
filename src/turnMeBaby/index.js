/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if(typeof str != 'string'){
    throw new Error();
  }
  let splitStr = str.split('');
  let reverseArr = splitStr.reverse();
  let joinArr = reverseArr.join('');
  return joinArr;
};

export default turnMeBaby;
