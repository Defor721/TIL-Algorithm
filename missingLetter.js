// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// 연속된 알파벳을 인자로 하는 배열을 입력값으로 받아, 배열에서 중간에 누락된 문자를 반환하는 메서드를 작성하시오.

// 단, 항상 정확히 하나의 문자만 누락되며 배열의 길이는 최소 2이다.

function findMissingLetter(array) {
  var n = array.length;
  var alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var bigAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (var i = 0; i < 25; i++) {
    if (array[0] == alpha[i]) {
      var first = i;
    } else if (array[n - 1] == alpha[i]) {
      var second = i;
    } else if (array[0] == bigAlpha[i]) {
      var first = i;
    } else if (array[n - 1] == bigAlpha[i]) {
      var second = i;
    }
  }
  var sliceA = alpha.slice(first, second + 1);

  var sliceB = bigAlpha.slice(first, second + 1);

  if (alpha.includes(array[0])) {
    var result = sliceA.filter((x) => !array.includes(x));
  } else {
    var result = sliceB.filter((x) => !array.includes(x));
  }

  return result.toString();
}
