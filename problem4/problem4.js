function munculSekali(angka) {
  let int = Array.from(angka).map(Number);
  let int_sort = int.sort();
  let uniques = [];
  let uniques_sort = [];

  for (i = 0; i < int_sort.length; i++) {
    if (i == 0) {
      if (int_sort[i] != int_sort[i + 1]) {
        uniques.push(int_sort[i]);
      } 
    } else if (i == int_sort.length-1) {
      if (int_sort[i] != int_sort[i - 1]) {
        uniques.push(int_sort[i]);
      }
    } else {
      if (int_sort[i] != int_sort[i + 1] && int_sort[i] != int_sort[i - 1]) {
        uniques.push(int_sort[i]);
      }
    }
  }
  for (i = 0; i < angka.length; i++) {
    if (uniques.includes(angka[i])) {
      continue;
    } else {
      uniques_sort.push(angka[i]);
      uniques.splice(uniques.indexOf(angka[i]));
    }
  }
  return (int_sort[0] == int_sort[1]);
}
console.log(munculSekali("76523752"));
module.exports = munculSekali;