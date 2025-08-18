// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = Number(array1.join(''))
  let num2 = Number(array2.join(''))

  return num1 + num2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = String(value)
  let reverseStr = str.split('').reverse().join('')

  return str === reverseStr
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // Case 1: no input (empty string, null, or undefined)
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }

  const number = Number(input);

  // Case 2: invalid number or 0
  if (isNaN(number) || number === 0) {
    return 'Must be a number besides 0';
  }

  // Case 3: valid non-zero number
  return '';
}

