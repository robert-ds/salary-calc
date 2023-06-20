/**
 * Calculate Average of list Elements
 * @returns average
 */
function calculateAverage(list) {

  // Variables of values of list
  let sumList = 0;

  // Sum elements of list
  for(let i = 0; i < list.length; i++){
    sumList = sumList + list[i];
  }

  // Calculate Average
  let average = sumList / list.length;

  // Display in Console
  console.log(average);

  // return result
  return average;

}

/**
 * Calculate Average With Method reduce
 * @returns average
 */
function calculateAverageWithReduce(list) {

  // Sum All Elements
  function sumAllElements(allValue, newValue) {
    return allValue + newValue;
  }

  // Sum Method reduce and sum elements of list
  const sumList = list.reduce(sumAllElements);

  // Calculate Average
  const average = sumList / list.length;

  // Display Average to Console
  console.log(average);

  // Return Average Value
  return average;

}