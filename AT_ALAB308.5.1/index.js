// Take an array of numbers and return the sum.

const numArray = [2, 4, 6, 8, 10];
let sumArray = 0;
for (let i = 0; i < numArray.length; i++) {
  sumArray = sumArray + numArray[i];
  
}

console.log(sumArray);


// Take an array of numbers and return the average.
const arOfNums = [20, 40, 60, 80, 90];
let total = 0;


for (let num of arOfNums) {
    total = total + num;
}


let avgArray = total / arOfNums.length;
console.log(avgArray); 



// Take an array of strings and return the longest string.


function strArray(arr) {
    let longest = "";
  
    for (let str of arr) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
  
    return longest;
  }

  
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


const stringsLongerThan = (array, length) => {
  return arr.filter(str => str.length > length);
};

const strings = ["five", "six", "seven"];
console.log(stringsLongerThan(strings, 3)); 

const extraString = ["eight", "nine", "ten", "eleven"];
console.log(stringsLongerThan(extraString, 5));





// Then use the result to calculate the average age.

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

workers = 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


    // # Sort by age in ascending order
   const sortByAge = data.sort((a, b) => Number(a.age) - Number(b.age));
    console.log(sortedByAge);


// Filter the array to remove entries with an age greater than 50.
const greaterThan50 = workers.filter(a => Number(item.age) <= 50);
console.log( filteredByAge);


// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mapArray = data.map(a => {
  return {
    id: item.id, 
    name: item.name,
    job: item.occupation,
    age: Number(n.age) + 1
  };
});
console.log(mapArray);

// Use the reduce method to calculate the sum of the ages.
const sumOfAge = data.reduce((sum, n)  => sum + Number(n.age), 0);
console.log(sumOfAge);

// Then use the result to calculate the average age.
const avgAge = sumOfAge / data.length;
console.log(avgAge);

// Take an object and increment its age field.
function incAge(obj) {
 
  if (!obj.age) {
      obj.age = 0;
  } else {
      obj.age += 1; 
  }
};

incAge(obj);


// Take an object, make a copy, and increment the age field of the copy. Return the copy.



function incrementAgeAndCopy(obj) {
  const copy = {};


  for (const key in obj) {
      if (obj.prop(key)) {
          copy[key] = obj[key];
      }
  }

 
  if (!copy.age) {
      copy.age = 0;
  } else {
      copy.age += 1; 
  }

  return copy; 
}