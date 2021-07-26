// Binary Search practice to help with day two question 

// In order to do a binary search we need to work with a sorted array 

// Sorted array = an array data structure in which each element is sorted in numerical, 
// alphabetical, or some other order, and placed at equally spaced addresses in computer memory

// key is the element we are looking for 
const binarySearch = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        // find the middle element of the sorted array 
        // Math.Floor() => returns the largest int less than or 
        // equal to a given number 
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



// try to get the numbers closest to the key with a set length 

const findCloseInt = (sortedArray,key) => {
    let start = 0;
    let end = sortedArray.length - 1;

}