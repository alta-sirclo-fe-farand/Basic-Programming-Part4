function pairSum(arr, target) {
  let pair = [];
  for (i = 0; i < arr.length; i++) {
    if (arr.includes(target-arr[i])) {
        pair.push(i);
        pair.push(arr.indexOf(target-arr[i]));
        break;
    }
  }
  return pair;
}
module.exports = pairSum;
