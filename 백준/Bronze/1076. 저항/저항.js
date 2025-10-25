const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const table = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
const answer =
  table.indexOf(input[0]).toString() +
  table.indexOf(input[1]).toString() +
  "0".repeat(table.indexOf(input[2]));

console.log(parseInt(answer));