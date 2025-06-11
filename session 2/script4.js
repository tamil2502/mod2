const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const calculate = document.getElementById("calculateBtn");

calculate.addEventListener("click", function () {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.innerText = "Please enter valid numbers";
    result.style.color = "red";
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;

  //result.textContent =
  //  "Tip: RM" + tip.toFixed(2) + " | Total: RM " + total.toFixed(2);
});
