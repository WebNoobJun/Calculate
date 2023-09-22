const out = document.querySelector(".out_str");
const container = document.querySelector(".calc_row");
const btn = container.querySelectorAll("button");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '.', '+/-'];
const signs = ["-", "+", "/", "X"];

let a = "";
let b = "";
let sign = "";
let finish = false;

function cancel() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = "0";
}

btn.forEach((e) => {
  e.addEventListener("click", function () {
    const key = e.textContent;

    if(numbers.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        out.textContent = a;
      } 
      else if (a !== "" && b !== "" && finish) {
      } 
      else {
        b += key;
        out.textContent = b;
      }
      return;
    }
    if(signs.includes(key)) {
      sign += key;
      out.textContent = sign;
    }

    if (key === "=") {
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "/":
          a = a / b;
          break;
        case "X":
          a = a * b;
          break;
      }
      finish = true;
      out.textContent = a;
      console.table(a, sign, b);
    }
  });
});
