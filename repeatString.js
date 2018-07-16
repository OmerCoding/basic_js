var repeatString = function(word, reps) {
  let string = '';
  if (reps < 0) {
    return "ERROR";
  }
  for (let i = 0; i < reps; i++) {
    string += word;
  }
  return string;
}

module.exports = repeatString
