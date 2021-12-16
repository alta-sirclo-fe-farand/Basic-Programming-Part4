function joinArrayRemoveDuplicate(arrayA, arrayB) {
  let conarr = arrayA.concat(arrayB);
  return(Array.from(new Set(conarr)));
}
module.exports = joinArrayRemoveDuplicate;
