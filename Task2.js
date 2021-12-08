let array = [1, 2];
let sum = `+`;
let difference = `-`;
let multiplication = `*`;
let division = `/`;
function calculateNum(a) {
  let res = a;
  switch (res) {
    case `+`:
      res = array[0] + array[1];
      break;
    case `-`:
      res = array[0] - array[1];
      break;
    case `*`:
      res = array[0] * array[1];
      break;
    case `/`:
      res = array[0] / array[1];
      break;
  }
  return res;
}
console.log(calculateNum(multiplication));

// Task 3
let ponennumber = `1214569745`;
function cleanUp(b) {
  let num = b.split(" ").join("");
  console.log(b.split(" ").join(""));
  if (num.length === 10) {
    num = true;
  } else if (num.length === 11 && num[0] === `+`) {
    for (let i = 1; i < num.length; i++) {
      if (num[i] === `+`) {
        num = `bad number`;
        break;
      }
    }
    num = num.replace(`+`, "");
  } else {
    num = `bad number`;
  }
  return num;
}
console.log(cleanUp(ponennumber));

// Task 4
let word = "listen";
let list = ["enlists", "google", "inlets", "banana"];
function searc(word, list) {
  let count = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (list[i].includes(word[j]) && word.length === list[i].length) {
        count.push(list[i]);
      }
    }
  }
  return count;
}
console.log(searc(word, list));

