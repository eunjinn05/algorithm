/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var symbol = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    };
  
    var add = 0;
    s.split('').forEach((index, num) => {
      if (symbol[index] < symbol[s[num+1]]) {
        add -= symbol[index];
      } else {
        add += symbol[index];
      }
    });
    return add;
  };