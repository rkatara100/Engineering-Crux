const radiusArray = [2, 5, 1, 3];

function calculateArea(radiusArray) {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(Math.PI * radiusArray[i] * radiusArray[i]);
  }

  return output;
}

function calculateCircumference(radiusArray) {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(2 * Math.PI * radiusArray[i]);
  }

  return output;
}

function calculateDiameter(radiusArray) {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(2 * radiusArray[i]);
  }

  return output;
}

//Modular way of writing code follow Do not Repeat Yourself principle
function area(radius) {
  return Math.PI * radius * radius;
}

function calculate(radiusArrow, logic) {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(logic(radiusArray[i]));
  }

  return output;
}

console.log("Modular Way to calculate area", calculate(radiusArray, area));
console.log("Normal Area calculation", calculateArea(radiusArray));
console.log("CircumFerence", calculateCircumference(radiusArray));
console.log("Diameter", calculateDiameter(radiusArray));
