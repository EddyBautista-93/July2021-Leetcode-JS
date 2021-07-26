// Define the two-dimensional array
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Lift', 1],
    ['Sleep', 7]
];
// print out 2d array
console.table(activities);

// add to the end
activities.push(['Study',2]);

console.table(activities);

// add in the middle 
activities.splice(1, 0, ['Programming', 2]);

console.table(activities);

// get the precentage of a number
activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

activities.pop();

console.table(activities); 