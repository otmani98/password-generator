let result = document.querySelector(".result");
let lengthOfP = document.querySelector("#length");
let lowercase = document.querySelector("#lower");
let uppercase = document.querySelector("#upper");
let specialch = document.querySelector("#special");
let numbers = document.querySelector("#number");
let button = document.querySelector("button");

//default Length
let LenGth = 12;
//if Length chosen by user
lengthOfP.addEventListener("input", function () {
  if (lengthOfP.value < 4) {
    LenGth = 12;
  } else {
    LenGth = +lengthOfP.value;
  }
});

//shuffle to make more randomly result
function shuffle(string) {
  return string
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

//login of generate new password and sent it to html
button.onclick = function () {
  let resulta = "";
  let numberValues = "0123456789";
  let lowerValues = "abcdefghijklmnopqrstuvwxyz";
  let uperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let spcialValues = "~!@#$%^&*()_+-}|{:><?";

  if (lengthOfP.value > 20) {
    result.style.fontSize = "15px";
  } else {
    result.style.fontSize = "25px";
  }

  if (
    lowercase.checked ||
    uppercase.checked ||
    specialch.checked ||
    numbers.checked
  ) {
    while (resulta.length < LenGth) {
      if (lowercase.checked) {
        resulta +=
          lowerValues[
            Math.floor(Math.random() * (lowerValues.length - 1 - 0 + 1)) + 0
          ];
      }
      if (uppercase.checked) {
        resulta +=
          uperValues[
            Math.floor(Math.random() * (uperValues.length - 1 - 0 + 1)) + 0
          ];
      }
      if (specialch.checked) {
        resulta +=
          spcialValues[
            Math.floor(Math.random() * (spcialValues.length - 1 - 0 + 1)) + 0
          ];
      }
      if (numbers.checked) {
        resulta +=
          numberValues[
            Math.floor(Math.random() * (numberValues.length - 1 - 0 + 1)) + 0
          ];
      }
    }
    let stash = shuffle(resulta);
    result.innerHTML = stash;
  } else {
    result.innerHTML = "You have to check at least one of options!";
    result.style.fontSize = "15px";
  }
};

//copy result
result.onclick = function () {
  if (result.innerHTML) {
    let resultvalue = result.innerHTML;
    navigator.clipboard.writeText(result.innerHTML);
    result.style.backgroundColor = "#009b84";
    result.innerHTML = "Copied!";
    setTimeout(function () {
      result.style.backgroundColor = "var(--main2-color)";
      result.innerHTML = resultvalue;
    }, 500);
  }
};
