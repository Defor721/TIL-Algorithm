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
