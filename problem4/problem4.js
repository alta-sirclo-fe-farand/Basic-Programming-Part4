function munculSekali(angka) {
  const int = Array.from(angka);
  let uniques = [];
  const intedit = int;

  for (i = 0; i < int.length; i++) {
    let int_copy = intedit.splice(intedit.indexOf(intedit[i]));
  }
  return intedit;
}
console.log(munculSekali("76523752"));
module.exports = munculSekali;