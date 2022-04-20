// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return `true` if the string is valid, and `false` if it's invalid.

// This Kata is similar to the **[Valid Parentheses](https://www.codewars.com/kata/valid-parentheses)** Kata, but introduces new characters: brackets `[]`, and curly braces `{}`.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: `()[]{}`.

// 중괄호 문자열을 받아 중괄호의 순서가 유효한지 확인하는 함수를 작성하세요. 문자열이 유효하면 true를 반환하고 유효하지 않으면 false를 반환해야 합니다.

// 이 Kata는 유효한 괄호 Kata와 유사하지만 대괄호 [] 및 중괄호 {}와 같은 새 문자를 도입합니다.

// 모든 입력 문자열은 비어 있지 않으며 괄호, 대괄호 및 중괄호(()[]{})로만 구성됩니다.
function validBraces(braces) {
  var str1 = braces.replace("()", "");
  var str2 = str1.replace("[]", "");
  var str3 = str2.replace("{}", "");
  //str3 == [],{},(), 즉 붙어있는 괄호가 제거된  문자열.
  var leng = str3.length;
  var str4 = str3.substr(0, leng / 2 - 1);
  var str5 = str3.substr(leng / 2);
  var str6 = str5.split("").reverse().join("");

  if (str5 != str6 || str5[0] == ")" || str5[0] == "]" || str5[0] == "}") {
    return false;
  } else {
    return true;
  }
}
