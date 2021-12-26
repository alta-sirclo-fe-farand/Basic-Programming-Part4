function munculSekali(angka) {
  let angkaUnik = new Set();

  for (digit of angka.split("")) {
    if (angkaUnik.has(parseInt(digit))) {
      angkaUnik.delete(parseInt(digit));
    } else {
      angkaUnik.add(parseInt(digit));
    }
  }
  return Array.from(angkaUnik);
}

module.exports = munculSekali;