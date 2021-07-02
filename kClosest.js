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
    var newArray = [];
    const key = binarySearch(arr, x); // use function to pull in the key 
    
    for (let i = 0; i < k; i++) {
        newArray.push(arr[i])     
    }
    var closest = arr.reduce(function(prev, curr) {
        return (Math.abs(curr - k) < Math.abs(prev - k) ? curr : prev);
      });
      
      console.log(closest)

    newArray.sort(function(a,b) {
        return a - b;
    });
    console.log(newArray);
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

findClosestElements([1,2,3,4,5],3,-1)

