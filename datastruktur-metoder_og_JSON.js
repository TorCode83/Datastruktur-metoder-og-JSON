const body = document.body;
const breakhtml = "<br/>";
const peopleArrayWithObjects = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    country: "USA",
    hobbies: ["Reading", "Hiking", "Photography", "Swimming"],
  },
  {
    id: 2,
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    country: "Canada",
    hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    country: "UK",
    hobbies: ["Painting", "Skiing", "Music", "Cycling"],
  },
  {
    id: 4,
    name: "David",
    age: 40,
    email: "david@example.com",
    country: "Australia",
    hobbies: ["Swimming", "Fishing", "Reading"],
  },
  {
    id: 5,
    name: "Eva",
    age: 32,
    email: "eva@example.com",
    country: "Germany",
    hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"],
  },
];

//! 1.

/* console.log the array */

console.log(peopleArrayWithObjects);

//! 1.1:

/* create variables for firstPerson (first person object in the array) and lastPerson 
(last person object in the array) for peopleArrayWithObjects: */

const firstPerson = peopleArrayWithObjects[0];
console.log(firstPerson);
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];
console.log(lastPerson);

//! 1.2


/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/

console.log(Object.entries(firstPerson));
console.log(Object.entries(lastPerson));

//! 1.3
/* console.log the hobbies of the first person using Object.entries (tip: this is unnecessary code, 
  but do it just to see the difference with what needs to be done later). 
Expected output is to be an array with 4 elements */

console.log(Object.entries(firstPerson.hobbies));
console.log(Object.entries(lastPerson.hobbies));

//! 1.4

/* Use .map instead of Object.entries to achieve the same result in the console as in 1.2: */

console.log(firstPerson.hobbies.map((hobby, index) => [index, hobby]));
console.log(lastPerson.hobbies.map((hobby, index) => [index, hobby]));

//! 1.5.

/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. 
Expected output is an array with common hobbies */

console.log(BPersonHasAPersonHobbies(lastPerson, firstPerson));
function BPersonHasAPersonHobbies(Aperson, Bperson) {
  return Aperson.hobbies.filter((v) => Bperson.hobbies.includes(v));

}

//! 1.6.

/* Use .map to display all the persons with their information on their page with the DOM. 
It should also show what hobbies they have in common. 
Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. 
  Remember to use defer if the script tag is in the head!) */

function addliel(element) {
  let lis = document.createElement("li");
  lis.textContent = element;
  return lis;
}

function displayPersonsInfo(Persons) {
  let ul = document.createElement("ul");
  Persons.forEach((person) => {
    ul = document.createElement("ul");
    Object.keys(person).forEach((nokkel) => {
      switch (nokkel) {
        case "hobbies":
          ul.appendChild(addliel(`${nokkel} = ${person[nokkel]}`));
          let ulhobby = document.createElement("ul");
          let equalhobbies = CheckEqualHobbiesTHEperson(person);
          Object.keys(equalhobbies).forEach((felleshobbyperson) => {
            ulhobby.appendChild(
              addliel(
                `${felleshobbyperson} er: ${equalhobbies[
                  felleshobbyperson
                ].join(", ")}`
              )
            );
          });
          let lihobby = addliel(`Felles interesse ${person.name} har med:`);
          lihobby.appendChild(ulhobby);
          ul.appendChild(lihobby);
          break;
        default:
          ul.appendChild(addliel(`${nokkel} = ${person[nokkel]}`));
          break;
      }
    });
    body.appendChild(ul);
  });
}
displayPersonsInfo(peopleArrayWithObjects);

//! 1.7

/* Use .filter to find all persons who have the same hobby as firstPerson. Display this with the 
DOM */

function CheckEqualHobbiesTHEperson(Theperson) {
  let returning = {};
  peopleArrayWithObjects.forEach((person) => {
    if (Theperson.id === person.id) {
      return;
    }
    returning[person.name] = BPersonHasAPersonHobbies(Theperson, person);
  });
  return returning;
}
console.log(CheckEqualHobbiesTHEperson(firstPerson));
body.innerHTML += "Task 1.7 complete in task 1.6";

//BPersonHasAPersonHobbies(firstPerson)

//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */

function getrandom(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
function createrandomarray(indexes, min = 1, max = 100) {
  return Array.from(new Array(indexes), () => getrandom(min, max));
}
function createrandomarrayrecrusive(indexes, depth = 2, min = 1, max = 100) {
  let answer = [];
  for (let i = 0; i < indexes; i++) {
    if (depth === 1) {
      return createrandomarray(indexes);
    }
    answer.push(createrandomarrayrecrusive(indexes, depth - 1));
  }
  return answer;
}

console.log(getrandom(1, 100));
const result = createrandomarray(10);

console.log(result);

//? ordre fra task 2.5 gjøres her.

function displayArrayDOM(Arrays, depth = 1) {
  body.innerHTML += `${breakhtml} [`;
  Arrays.forEach((el) => {
    if (depth !== 1) {
      displayArrayDOM(el, depth - 1);
    } else {
      body.innerHTML += `${el}, `;
    }
  });
  body.innerHTML += `]`;
}
//body.innerHTML += `<div>`;

body.innerHTML += `${breakhtml}${breakhtml} Random generated array for task 2 is:`;
displayArrayDOM(result);

//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */

const odd = result.filter((v) => (v = v % 2 === 1));
console.log(odd);
const even = result.filter((v) => (v = v % 2 === 0));
console.log(even);

//? ordre fra task 2.5 gjøres her.

body.innerHTML += `${breakhtml}${breakhtml}${breakhtml} This is task 2.1`;
body.innerHTML += `${breakhtml}${breakhtml} Array from task 2 has name result, and its' odd numbers are:`;
displayArrayDOM(odd);
body.innerHTML += `${breakhtml}${breakhtml} Array from task 2 has name result, and its' even numbers are:`;
displayArrayDOM(even);

//! 2.2

/* Write a function that finds the largest number in the different arrays. 
Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

function largestElements(arrays) {
  let Maxs = [];
  arrays.forEach((array) => {
    let Max = -Infinity;
    array.forEach((element) => {
      Max = Math.max(Max, element);
    });
    Maxs.push(Max);
  });
  return Maxs;
}
const testanswer = createrandomarrayrecrusive(10);
console.log(testanswer);
console.log(largestElements(testanswer));

//? ordre fra task 2.5 gjøres her.

body.innerHTML += `${breakhtml}${breakhtml} task 2.2, Random generated 10X10 array is displayed under:`;
displayArrayDOM(testanswer, 2);

//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. 
So the sum of odd numbers in one result and the sum of even numbers in another result. 
Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */

function SumElsInArray(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

function sumFilterDelimiter(arrays, Delimter, Rest) {
  let sums = [];
  arrays.forEach((array) => {
    sums.push(SumElsInArray(array.filter((v) => (v = v % Delimter === Rest))));
  });
  return sums;
}
const summArrayODDNumbers = sumFilterDelimiter(testanswer, 2, 1);
console.log(summArrayODDNumbers);

//consoles all odd number in 10 array testanswer is a "random" generated (10) [Array(10),....]

const summArrayEVENNumbers = sumFilterDelimiter(testanswer, 2, 0);
console.log(summArrayEVENNumbers);

//consoles all even number in 10 array testanswer is a "random" generated (10) [Array(10),....]

//? ordre fra task 2.5 gjøres her.

body.innerHTML += `${breakhtml}${breakhtml} task 2.3, under the sum of odd numbers all arrays:`;
displayArrayDOM(summArrayODDNumbers);
body.innerHTML += `${breakhtml}${breakhtml} task 2.3, under the sum even numbers  all arrays:`;
displayArrayDOM(summArrayEVENNumbers);

//! 2.4

/* Create a function that adds up the numbers in different arrays. 
Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). 
Write an if-else statement that console logs which of the two arrays has the largest sum. 
Remember an else statement that says if both are equal (very unlikely) */

function checkIfOddOrEvenIsGreater(arrays) {
  const odds = SumElsInArray(sumFilterDelimiter(arrays, 2, 1));
  const evens = SumElsInArray(sumFilterDelimiter(arrays, 2, 0));
  let answer = "";
  if (odds - evens > 0) {
    answer += "There are more odd numbers";
  } else if (odds - evens < 0) {
    answer += "There are more even numbers";
  } else {
    answer += "There is equal amount of both even and odd numbers";
  }
  console.log(answer);
  return [odds, evens, answer];
}
let odds, evens, answers;
[odds, evens, answers] = checkIfOddOrEvenIsGreater(testanswer);

//? ordre fra task 2.5 gjøres her.

body.innerHTML += `
  ${breakhtml}${breakhtml} task 2.4: Sum all odd numbers is ${odds}, and evens is ${evens}. 
  Answer:${breakhtml}
  `;
body.innerHTML += answers;


//! 2.5:
/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */

body.innerHTML += `${breakhtml}${breakhtml}

Array with random elements and attributes: ${breakhtml}${breakhtml}
createrandomarrayrecrusive(10, 1) =`;
displayArrayDOM(createrandomarrayrecrusive(10, 1));