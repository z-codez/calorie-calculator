const form = document.querySelector("#form");
const entryDropdown = document.querySelector("#entry");
const budgetInput = document.querySelector("#budget");
const addEntryButton = document.querySelector("#controls button");
// const calculateButton = document.querySelector("#buttons button:first-of-type");
const clearButton = document.querySelector("#buttons button:last-of-type");
const outputDisplay = document.querySelector("#display");

const caloriesLeftSpan = outputDisplay.querySelector("#calories-left");
const surplusOrDeficitSpan = outputDisplay.querySelector("#surplusordeficit");
const budgetedSpan = outputDisplay.querySelector("#budgeted");
const consumedSpan = outputDisplay.querySelector("#consumed");
const burnedSpan = outputDisplay.querySelector("#burned");

let isError = false;

function runTest() {
  let n = 1;

  let numberString = '121';
  numberString += n;

  console.log(typeof n);
  console.log(/\d+e\d+/i.test("1E10 1e10"));
}
// runTest();

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value}` + " .input-container");

  // Get the number of child nodes in the parent container. Returns a static NodeList
  const noOfEntries = targetInputContainer.querySelectorAll('input[type="number"]').length + 1;

  const currentEntry = entryDropdown.value + "-" + noOfEntries;

  const HTMLString = `
  <label for="${currentEntry}-name">Entry ${noOfEntries} Name</label>
  <input id="${currentEntry}-name" type="text" placeholder="Name"/>
  <label for="${currentEntry}-calories">Entry ${noOfEntries} Calories</label>
  <input id="${currentEntry}-calories" type="number" min="0" placeholder="Number of calories"/>
  `;

  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}



function calcRemCalories(e) {
  e.preventDefault();
  isError = false;

  const budgetCalories = budgetInput.value;
  console.log(budgetCalories);

  const breakfastCalories = getCaloriesFromInputs(document.querySelectorAll('#breakfast input[type="number"]'));
  const lunchCalories = getCaloriesFromInputs(document.querySelectorAll('#lunch input[type="number"]'));
  const dinnerCalories = getCaloriesFromInputs(document.querySelectorAll('#dinner input[type="number"]'));
  const snacksCalories = getCaloriesFromInputs(document.querySelectorAll('#snacks input[type="number"]'));
  const exerciseCalories = getCaloriesFromInputs(document.querySelectorAll('#exercise input[type="number"]'));

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

  const remainingCalories = budgetCalories - (consumedCalories + exerciseCalories);

  caloriesLeftSpan.innerText = Math.abs(remainingCalories);
  surplusOrDeficitSpan.innerText = remainingCalories < 0 ? "Surplus" : "Deficit";
  budgetedSpan.innerText = budgetCalories;
  consumedSpan.innerText = consumedCalories;
  burnedSpan.innerText = exerciseCalories;
  outputDisplay.style.display = "block";
}

/************* EVENT LISTENERS ***************************/
addEntryButton.addEventListener('click', addEntry);
form.addEventListener('submit', calcRemCalories);


function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const listItem of list) {
    const currVal = cleanInputString(listItem.value);
    const invalidInputMatch = isInputInvalid(currVal);

    if (invalidInputMatch) {
      alert(`${listItem.value} is invalid`);
      return null;
    }

    calories += Number(currVal);
  }

  return calories;
}

function cleanInputString(str) {
  const regex = /[+-/s]/g;
  return str.replace(regex, '');
}

function isInputInvalid(str) {
  const regex = /\d+e\d+/i;

  // str.match(regex) can also be used but RegExp Object.text(str) is faster
  return regex.test(str);
}
