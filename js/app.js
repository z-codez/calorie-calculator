const budget = document.querySelector("#budget");
const calcButton = document.querySelector("#buttons button:first-of-type");

calcButton.addEventListener("click", () => {
  console.log(budget.value);
})
