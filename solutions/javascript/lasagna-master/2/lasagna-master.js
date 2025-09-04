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
export function cookingStatus(time) {
  if (time == 0) {
    return 'Lasagna is done.'
  }else if(time > 0){
    return 'Not done, please wait.'
  }else {
    return 'You forgot to set the timer.'
  }
}

// task 2
export function preparationTime(layers,timePerLayer = 2) {
  return layers.length * timePerLayer
}

// Task 3
// export function quantities(items) {
//   let noodlesCount = 0
//   let sauseCont = 0
//   items.forEach((item) => {
//     if (item.includes('noodles')) {
//       noodlesCount++
//     }
//     else if (item.includes('sauce')) {
//       sauseCont++
//     }
//   })
//   return {noodles: noodlesCount*50, sauce: sauseCont*0.2}
// }

// another approach task 3
export function quantities(items) {
  return {
    noodles: items.filter((item) => item == 'noodles').length*50,
    sauce: items.filter((item) => item == 'sauce').length*0.2
  }
}

// Task 4
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1])
}

// Task 5
export function scaleRecipe(recipe,amount) {
  const scaled = {}
  for(let key in recipe){
    scaled[key] = recipe[key]*amount/2
  }
  return scaled
}