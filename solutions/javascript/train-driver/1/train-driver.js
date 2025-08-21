// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...numbers} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  return ids //using rest perfect way
  // return Array.from(arguments) //using arguments + conversion
  // return [...arguments]   //using spread + arguments

  // using inbuilt + arguments
  // const result = [];
  // for (let i = 0; i < arguments.length; i++) {
  //   result.push(arguments[i]);
  // }
  // return result;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  let wagons = [...ids]
  // let firstTwo =  wagons.splice(0,2)
  // return wagons.concat(firstTwo)

  return wagons.slice(2).concat(wagons.slice(0, 2))
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  const wagons = [...ids];
  wagons.splice(1, 0, ...missingWagons);  //best way using splice+spread
  return wagons;

  // const wagons = Array.from(ids)
  // const missing = Array.from(missingWagons)
  // return [wagons[0],...missing, ...wagons.slice(1)]
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  // return Object.assign(information,additional) //using Object.assign() its modify 
  // return Object.assign({},information,additional) //or
  // return Object.assign(...information,...additional) //error object are not iterable
  return {...information,...additional}
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  // let time = information.timeOfArrival
  // let updatedRouteInfo = Object.fromEntries(Object.entries(information).filter(([key]) => key!== 'timeOfArrival'))
  // return [time,updatedRouteInfo]

  const { timeOfArrival, ...rest } = information; // extract + rest operator
  return [timeOfArrival, rest];
}
