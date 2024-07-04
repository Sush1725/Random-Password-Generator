let passwrd = document.querySelector("#password");
let btn = document.querySelector("#btn");
let length = 12;

let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "@#$%^&*()_+~|{}[]<>/-=";
let num = "0123456789";

let AllChar = UpperCase + LowerCase + symbol + num;

function createpass() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += num[Math.floor(Math.random() * num.length)];

  while (length > password.length) {
    password += AllChar[Math.floor(Math.random() * AllChar.length)];
  }
  passwrd.value = password;
}

btn.addEventListener("click", createpass);

function copypass() {
  passwrd.select();

  navigator.clipboard.writeText(passwrd.value);
}
