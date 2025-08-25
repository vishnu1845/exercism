/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let total = 0
  switch(pizza) {
    case 'Margherita':
      total = 7
      break;
    case 'Caprese':
      total = 9
      break;
    case 'Formaggio':
      total = 10
      break
    default:
      console.log('not available')
  }

  for (let extra of extras) {
    switch(extra){
      case 'ExtraSauce':
        total += 1
        break
      case 'ExtraToppings':
        total +=2
        break
      default:
        // total
    }
  }
  return total
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (sum, order) => sum + pizzaPrice(order.pizza, ...(order.extras || [])),
    0
  );
}

