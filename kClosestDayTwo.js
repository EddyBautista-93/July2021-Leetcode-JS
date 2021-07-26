// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 

// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// notes --
// create a int array the size of k;

// x is the key we need to find in the array -- implement a binary search function 

// list the return array in asc order with a .sort(function(a,b) { return a - b;});
// since the array is sorted I can use binary search 

const findClosestElements = (arr, k, x) => {
    let left = 0
    let right = arr.length - 1
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
  
      if(x - arr[mid] > arr[mid + k] - x) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return arr.slice(left, left + k)
 };

 // implement a binary search function to use in the findClosest function 
 const binarySearch = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {

        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle; // if the key is in the middle of the array
        } else if (sortedArray[middle] < key) {
            // search the right side 
            start = middle + 1;
        } else {
            // search the left side
            end = middle - 1;
        }
        // key wasn't found 
        return -1;
    }
}

findClosestElements([10, 12, 15, 17, 18, 20, 25],3,19);

