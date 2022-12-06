/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var temp = x;
  var rev = 0;

  while (x > 0) {
    var digit = x % 10; // 1의자리
    rev = parseInt((rev * 10) + digit); // 
    x = parseInt(x/10); // 그 다음 1의 자리
  }

  if (rev == temp) {
    return true;
  } else {
    return false;
  }
};