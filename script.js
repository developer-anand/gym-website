const menu = document.getElementById("bar");
const item = document.getElementById("item");

item.style.right = "-300px";

menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (!weight || !height) {
    document.getElementById("heading").innerHTML =
      "Please enter both weight and height";
    document.getElementById("bmi-output").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    return;
  }

  // Check if weight and height are valid numbers
  if (isNaN(weight) || isNaN(height)) {
    document.getElementById("heading").innerHTML =
      "Please enter valid numeric values for weight and height";
    document.getElementById("bmi-output").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    return;
  }

  let bmi = ((weight / (height * height)) * 703).toFixed(2);

  document.getElementById("heading").innerHTML = "Your BMI is";

  document.getElementById("bmi-output").innerHTML = bmi;

  if (bmi <= 24.9) {
    document.getElementById("message").innerHTML = "You are Underweight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("message").innerHTML = "You are Healthy";
  } else {
    document.getElementById("message").innerHTML = "You are Overweight";
  }
}
