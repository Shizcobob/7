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
        if(sortedNumbers[j+1] != sortedNumbers[j]+1 || sortedNumbers[j+1] == undefined){
            let n = {}

            n.sortedNumbers[[j]]
            i.sortedNumbers[j]
            b.push({i,n});
        }
    }
}
console.log(allNonConsecutive(numbers1))
console.log(allNonConsecutive(numbers2))

/*****************************************************************************/