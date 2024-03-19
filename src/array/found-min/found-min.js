/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  } else {
    let min_value = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min_value) {
        min_value = arr[i];
      }
    }
    return min_value;
  }
}
module.exports = min;
