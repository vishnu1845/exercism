// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0
  for(let i=0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i]
  }
  return total

  // using for of loop  here not working
  // let total = 0;
  // for (let count of birdsPerDay) {
  //   total += count; // add each day's count to total
  // }
  // return total;

  // using reduce method  not working here
  // return birdsPerDay.reduce((sum, count) => sum + count, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let startIndex = (week - 1) * 7;
  let total = 0;
  for (let i = startIndex; i < startIndex + 7; i++) {
    total += birdsPerDay[i];
  }
  return total;

  // using inbuilt methods
  // const start = (week - 1) * 7;
  // return birdsPerDay
  //   .slice(start, start + 7)
  //   .reduce((sum, count) => sum + count, 0);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1; 
  }
}

