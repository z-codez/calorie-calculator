const form = document.querySelector("#form");
const entryDropdown = document.querySelector("#entry");
const budgetInput = document.querySelector("#budget");
const addEntryButton = document.querySelector("#controls button");
// const calculateButton = document.querySelector("#buttons button:first-of-type");
const clearButton = document.querySelector("#buttons button:last-of-type");
const outputDisplay = document.querySelector("#display");


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



function calcRemCalories() {

  console.log(budgetInput.value);
  console.log(typeof budgetInput.value);
}

/************* EVENT LISTENERS ***************************/
addEntryButton.addEventListener('click', addEntry);
form.addEventListener('submit', calcRemCalories);


function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const listItem of list) {

  }
}
