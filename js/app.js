const form = document.querySelector("#form");
const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry");
const addEntryButton = document.querySelector("#controls button");
// const calculateButton = document.querySelector("#buttons button:first-of-type");
const clearButton = document.querySelector("#buttons button:last-of-type");
const outputDisplay = document.querySelector("#display");


function addEntry() {
  console.log(entryDropdown.value);
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const noOfEntries = targetInputContainer.querySelectorAll(`input[type="number"]`).length;

  const currentEntry = entryDropdown.value + "-" + noOfEntries;

  const HTMLString = `
  <label for="${currentEntry}-name">Entry ${noOfEntries} Name</label>
  <input id="${currentEntry}-name" type="text" placeholder="Name"/>
  <label for="${currentEntry}-calories">Entry ${noOfEntries} Calories</label>
  <input id="${currentEntry}-calories" type="number" min="0" placeholder="Number of calories"/>
  `;

  targetInputContainer.innerHTML += HTMLString;
}
