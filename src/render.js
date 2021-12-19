const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const square = document.querySelector("#square");
const onebyinput = document.querySelector("#onebyinput");
const sqrt = document.querySelector("#sqrt");
const equal = document.querySelector("#equal");

displaynum = (val) => {
  display.value += val;
};

clear.addEventListener("click", () => {
  display.value = "";
});

backspace.addEventListener("click", () => {
  value = display.value;
  sliced = value.slice(0, -1);
  display.value = sliced;
});

equal.addEventListener("click", () => {
  try {
    value = display.value;
    solved = eval(value);
    display.value = solved;
  } catch (error) {
    display.value = "Invalid Input";
  }
});

square.addEventListener("click", () => {
  value = display.value;
  try {
    solved = eval(value);
    result = solved * solved;
    display.value = result;
  } catch (error) {
    display.value = "Invalid Input";
  }
});

sqrt.addEventListener("click", () => {
  value = display.value;
  try {
    solved = eval(value);
    result = Math.sqrt(solved);
    display.value = result;
  } catch (error) {
    display.value = "Invalid Input";
  }
});
