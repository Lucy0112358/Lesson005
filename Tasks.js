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

// Task 6
let first = `This is some text.`;
let second = `is`;
function removeStr(a, b) {
  let result = ``;
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(b) >= 0) {
      result =
        a.substring(0, a.indexOf(b)) +
        a.substring(a.indexOf(b) + b.length, a.length);
    }
    a = result;
  }
  return result;
}
console.log(removeStr(first, second));

// Task 7
let letters = "dfgjkloyp";
function computeStr(ar) {
  let trs = "";
  for (let i = 0; i < ar.length; i = i + 3) {
    trs = trs + ar[i + 1] + ar[i + 2] + ar[i];
  }
  return trs;
}
console.log(computeStr(letters));

// Task 8
let sent = `A revolution without dancing is a revolution not worth having.`;
function find(str) {
  let emptyarr = sent.split(` `);
  let lonq = [];
  let maximum = 0;
  let answer;
  for (let i = 0; i < emptyarr.length; i++) {
    lonq.push(emptyarr[i].length);
    if (lonq[i] > maximum) {
      maximum = lonq[i];
      answer = emptyarr[i];
    }
  }
  return answer;
}
console.log(find(sent));

// Task 9
let input = [1, 1, 2, -3, 0, 8, 4, 0];
let tiv = 9;
function returnLarqer(arr, a) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      answer.push(arr[i]);
    } else {
      answer = `Such values do not exist.`;
    }
  }
  return answer;
}
console.log(returnLarqer(input, tiv));

// Task 10
let text = `there are no two words in the english language more harmful than “go“od job.`;
function find(sekk) {
  let se = sekk.split(` `).join(``);
  let str = ``;
  let answer = [];
  for (let i = 0; i < se.length; i++) {
    if (str.indexOf(se[i]) === -1) {
      str = str + se[i];
    } else {
      answer.push(str);
      str = se[i];
    }
  }
  return answer;
}
console.log(find(text));

// Task 11
let a = 19;
let b = 42;
function oweNumbers(a, b) {
  let answer = [];
  let result = [];
  for (let i = a; i <= b; ++i) {
    answer.push(String(i));
  }
  for (let i = 0; i < answer.length; ++i) {
    let count = 0;
    for (let j = 0; j < answer[i].length; j++) {
      if (answer[i][j] % 2 === 0 ) {
        count++;
        if (count === answer[i].length) {
          result.push(answer[i]);
        }
      }
    }
    couunt = 0;
  
  }
    return result;
}
console.log(oweNumbers(19, 42));
