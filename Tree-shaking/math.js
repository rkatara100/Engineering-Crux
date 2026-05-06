export const add = (a, b) => a + b;

export const massiveData = [
  "WEBPACK",
  "TREE",
  "SHAKING",
  "WEBPACK",
  "TREE",
  "SHAKING",
  "WEBPACK",
  "TREE",
  "SHAKING",
  "WEBPACK",
  "TREE",
  "SHAKING",
];

for (let i = 0; i < 50000; i++) {
  massiveData.push("UNUSED_DATA_" + i);
}
