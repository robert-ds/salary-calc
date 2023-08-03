// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMedian() {}
// }

const PlatziMath = {};

PlatziMath.isPar = function isPar(list) {
  return !(list.length % 2);
};

PlatziMath.isOdd = function isOdd(list) {
  return list.length % 2;
};

/**
 * Calculate Average of list Elements
 * @returns average
 */
PlatziMath.calculateAverage = function calculateAverage(list) {
  // Variables of values of list
  let sumList = 0;

  // Sum elements of list
  for (let i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
  }

  // Calculate Average
  let average = sumList / list.length;

  // Display in Console
  console.log(average);

  // return result
  return average;
};

/**
 * Calculate Average With Method reduce
 * @returns average
 */
PlatziMath.calculateAverageWithReduce = function calculateAverageWithReduce(
  list
) {
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
};

/**
 * Calculate Median of list Elements
 * @returns median
 */
PlatziMath.calculateMedian = function calculateMedian(listDisordered) {
  const list = PlatziMath.orderList(listDisordered);
  const listIsPar = PlatziMath.isPar(list);

  if (listIsPar) {
    const indexHalf1ListPar = list.length / 2 - 1;
    const indeHalf2ListPar = list.length / 2;
    const listHalf = [];
    listHalf.push(list[indexHalf1ListPar]);
    listHalf.push(list[indeHalf2ListPar]);

    const medianListPar = PlatziMath.calculateAverageWithReduce(listHalf);
    return medianListPar;
  } else {
    const indexHalfListImpar = Math.floor(list.length / 2);
    const medianListImpar = list[indexHalfListImpar];
    console.log(indexHalfListImpar);
    console.log(medianListImpar);
    return medianListImpar;
  }
};

/**
 * Order list function
 * @return list
 */
PlatziMath.orderList = function orderList(disorderedList) {
  function orderListSort(accumulatedValue, newValue) {
    return accumulatedValue - newValue;
  }

  const list = disorderedList.sort(orderListSort);
  // const list = disorderedList.sort((a, b) => a - b);

  return list;
};

/**
 * Bidimensional order list function
 * @return list
 * @example [ [0,1],  [0,1],  [0,1] ]
 * */
PlatziMath.orderListBidimensional = function orderListBidimensional(
  disorderedList,
  i
) {
  function orderListSort(accumulatedValue, newValue) {
    return accumulatedValue[i] - newValue[i];
  }

  const list = disorderedList.sort(orderListSort);
  return list;
};

/**
 * Calculate moda function
 * @return moda
 */
PlatziMath.calculateModa = function calculateModa(list) {
  const listCount = {};

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }

  const listArray = Object.entries(listCount);
  const listOrdered = orderListBidimensional(listArray, 1);
  const listMaxNumber = listOrdered[listOrdered.length - 1];
  const moda = listMaxNumber[0];
  // console.log({listCount, listArray, listOrdered, listMaxNumber});
  // console.log('The moda is: ' + listMaxNumber[0]);
  return moda;
};
