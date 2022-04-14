// **Your task is to sort a given string. Each word in the string will contain
//     a single number. This number is the position the word should have in the
//     result.** **Note: Numbers can be from 1 to 9. So 1 will be the first word
//     (not 0).** **If the input string is empty, return an empty string. The words
//     in the input String will only contain valid consecutive numbers.** **당신의
//     임무는 주어진 문자열을 정렬하는 것입니다. 문자열의 각 단어에는 단일 숫자가
//     포함됩니다. 이 숫자는 결과에서 단어가 가져야 하는 위치입니다.** **참고:
//     숫자는 1에서 9까지일 수 있습니다. 따라서 1이 첫 번째 단어가 됩니다(0이
//     아님).** **입력 문자열이 비어 있으면 빈 문자열을 반환합니다. 입력 문자열의
//     단어에는 유효한 연속 숫자만 포함됩니다.**

function order(words) {
  var wordArr = words.split(" ");
  //문자열을 공백 기준으로 나눈 배열.
  var voidArr = [];
  //값을 담을 빈 배열
  var void2Arr = [];
  var void3Arr = [];
  for (var i = 0; i < wordArr.length; i++) {
    voidArr[i] = wordArr[i].split("");
    for (var j = 0; j < voidArr.length; j++) {
      if (voidArr[j].includes("1")) {
        void2Arr[0] = voidArr[j];
      } else if (voidArr[j].includes("2")) {
        void2Arr[1] = voidArr[j];
      } else if (voidArr[j].includes("3")) {
        void2Arr[2] = voidArr[j];
      } else if (voidArr[j].includes("4")) {
        void2Arr[3] = voidArr[j];
      } else if (voidArr[j].includes("5")) {
        void2Arr[4] = voidArr[j];
      } else if (voidArr[j].includes("6")) {
        void2Arr[5] = voidArr[j];
      } else if (voidArr[j].includes("7")) {
        void2Arr[6] = voidArr[j];
      } else if (voidArr[j].includes("8")) {
        void2Arr[7] = voidArr[j];
      } else if (voidArr[j].includes("9")) {
        void2Arr[8] = voidArr[j];
      }
    }
  }

  for (var k = 0; k < void2Arr.length; k++) {
    void3Arr[k] = void2Arr[k].join("");
  }
  var void4 = void3Arr.join(" ");
  return void4;
}
order("4of Fo1r pe6ople g3ood th5e the2");
