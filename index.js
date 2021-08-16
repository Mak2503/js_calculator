var calc = "";
const useInp = document.getElementById("useinp");
const compOut = document.getElementById("compout");

function calcValue(value) {
  calc = calc + value;
  useInp.value = calc;
}

function removeInp() {
  calc = calc.substring(0, calc.length - 1);
  useInp.value = calc;
}

function evalInp() {
  if (calc.length == 0 || calc == "") {
    alert("Need an input");
  }
  try {
    ans = eval(calc);
    compOut.value = ans;
  } catch (err) {
    alert("Invalid input");
  }
}

function reset() {
  calc = "";
  useInp.value = "";
  compOut.value = "";
}
