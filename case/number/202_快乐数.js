

// var isHappy = function (n) {
//   const noHappySet = new Set();
//   return happy(n, noHappySet);
// };

// var happy = function (n, noHappySet) {
//   const numberStr = String(n);
//   let result = 0;
//   for (let i = 0; i < numberStr.length; i++){
//     const num = +numberStr[i];
//     result += Math.pow(num, 2);
//   }
//   if (noHappySet.has(result)) {
//     return false
//   }
//   if (result === 1) {
//     return true;
//   }
//   noHappySet.add(result);
//   return happy(result, noHappySet);
// };

var isHappy = function (n) {
  const numberStr = String(n);
  if (numberStr.length === 1 && n % 2 === 0) {
      return false
  }
  let result = 0;
  for (let i = 0; i < numberStr.length; i++){
    const num = +numberStr[i];
    result += Math.pow(num, 2);
  }
  if (result === 1) {
    return true;
  }
  return isHappy(result, noHappySet);
};