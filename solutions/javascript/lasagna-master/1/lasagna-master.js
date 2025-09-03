/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determines the cooking status of the lasagna based on the remaining time.
 * 
 * @param {number} [remainingTime] - The remaining time on the timer in minutes
 * @returns {string} The cooking status message
 */
export function cookingStatus(remainingTime) {
  // Check if no timer value was provided (undefined)
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }
  
  // Check if timer shows 0 (lasagna is done)
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  
  // For any other number, lasagna is not done yet
  return 'Not done, please wait.';
}

/**
 * Calculates the total preparation time for lasagna layers.
 * 
 * @param {string[]} layers - Array of layer names
 * @param {number} [avgPrepTime=2] - Average preparation time per layer in minutes
 * @returns {number} Total preparation time in minutes
 */
export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

/**
 * Calculates the quantities of noodles and sauce needed for the lasagna.
 * 
 * @param {string[]} layers - Array of layer names
 * @returns {Object} Object with noodles (in grams) and sauce (in liters) quantities
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  
  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50; // 50 grams per noodle layer
    } else if (layer === 'sauce') {
      sauce += 0.2; // 0.2 liters per sauce layer
    }
  }
  
  return { noodles, sauce };
}

/**
 * Adds the secret ingredient from friend's list to your recipe list.
 * This function modifies the myList array by adding the last ingredient
 * from friendsList to the end of myList.
 * 
 * @param {string[]} friendsList - The friend's ingredient list (not modified)
 * @param {string[]} myList - Your recipe list (will be modified)
 */
export function addSecretIngredient(friendsList, myList) {
  // Add the last ingredient from friendsList to myList
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scales a recipe object for a different number of portions.
 * The original recipe is for 2 portions.
 * 
 * @param {Object} recipe - The original recipe object (not modified)
 * @param {number} portions - The number of portions to scale to
 * @returns {Object} A new scaled recipe object
 */
export function scaleRecipe(recipe, portions) {
  const scaleFactor = portions / 2;
  const scaledRecipe = {};
  
  for (const [ingredient, amount] of Object.entries(recipe)) {
    scaledRecipe[ingredient] = amount * scaleFactor;
  }
  
  return scaledRecipe;
}