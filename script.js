function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    let expression = display.value;

    expression = expression.replace(/\^/g, "**");

    expression = expression.replace(
      /Math\.pow\(([^,]+),\s*([^\)]+)\)/g,
      "($1 ** $2)"
    );

    expression = expression.replace(/Math\.sqrt\(([^)]+)\)/g, "Math.sqrt($1)");

    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}
