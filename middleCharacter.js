//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//당신의 임무는 단어의 중간 문자를 반환하는 것입니다. 단어의 길이가 홀수이면 중간 문자를 반환합니다. 단어의 길이가 짝수이면 중간 2자를 반환합니다.**

//단, 문자열의 길이는 0<str<1000






function getMiddle(s) {
  var tex = s.split("");
  var n = tex.length;
  var res = [];
  if (n % 2 != 0) {
    res[0] = tex[Math.floor(n / 2)];

    return res[0];
  } else {
    res[0] = tex[n / 2 - 1];
    res[1] = tex[n / 2];
    return res.join("");
  }
}
