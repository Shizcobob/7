/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];

const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const numbers2 = [];
const expected2 = [];

const numbers3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];

function allNonConsecutive(sortedNumbers) {

    for(let j = 0; j < sortedNumbers.length; j++){
        if(sortedNumbers[j+1] != sortedNumbers[j]+1){
            let n = {}

            b.push({i,n});
        }
    }
}
console.log(allNonConsecutive(numbers1))
console.log(allNonConsecutive(numbers2))


// Working example

// Explanation: Index 0 has no number before it, so it is not included.

/**
 
Finds all the non-consecutive (out of order) numbers from the given array.
Time: O(?).
Space: O(?).
@param {Array<number>} sortedNumbers
@typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
@property {number} i The index of the non consecutive number.
@property {number} n The non consecutive number itself.
@returns {NonConsecutiveNumbers}
*/
function allNonConsecutive(sortedNumbers) {
    let result = [] //declaring an empty result
    if (sortedNumbers.length < 2) { //check if the initial array is too short to connect.
        return result 
    }

    for (let index = 1; index < sortedNumbers.length; index++) { // iterating through the numbers.
        if (sortedNumbers[index] != ( sortedNumbers[index - 1] + 1 ) ) { // to check if the current value is one greater than the previous value.
            let temp = { i: index, n: sortedNumbers[index] } // formatting new information.
            result.push(temp) // pushing new info into result
        }
    }
    return result 
}
console.log(allNonConsecutive(numbers1))
console.log(allNonConsecutive(numbers2))
console.log(allNonConsecutive(numbers3))


/*****************************************************************************/