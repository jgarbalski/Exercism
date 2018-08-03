var DnaTranscriber = function () {};

var dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

var transcribeDna = function (dna, change) {
  return dna.replace(/./g, function (dna1) {
    if (!(dna1 in change)) { throw Error('Invalid input'); }
    return change[dna1];
  });
};

DnaTranscriber.prototype.toRna = function (dna) {
  return transcribeDna(dna, dnaToRna);
};

module.exports = DnaTranscriber;
