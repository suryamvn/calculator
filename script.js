const items = document.querySelectorAll(".calc_buttons_item");
let num1 = "";
let num2 = "";
let expr = "";
let myFunction = () => {
  expr = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(expr);
};

let myFunction2 = (num) => {
  document.getElementById("screen").value += num;
};

let myFunction3 = (num) => {
  switch (num) {
    case 1:
      document.getElementById("screen").value = "";
      break;
    case 2:
      document.getElementById("screen").value = document
        .getElementById("screen")
        .value.slice(0, -1);
      break;
  }
};

let myFunction1 = (num) => {
  let num1 = document.getElementById("screen").value;
  switch (num) {
    case 1:
      document.getElementById("screen").value = 1 / num1;
      break;
    case 2:
      document.getElementById("screen").value = Math.pow(num1, 2);
      break;
    case 3:
      document.getElementById("screen").value = Math.sqrt(num1);
      break;
  }
};
