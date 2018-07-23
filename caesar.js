function stringToAscii (string) {
  let asciiString = [];
  for (let i = 0; i < string.length; i++){
    asciiString.push(string[i].charCodeAt(0));
  } // convert each  char to ASCII within the FOR loop
  return asciiString;
}

function decreaseSubstitute(substitution) {
  if (substitution > 0) {
    return (substitution % 26);
  } else {
    return (substitution % -26);
  }
}

function encryption(char, sub){
  let downSub;
  if (char <= 90 && char >= 65) {
    char += sub;
    if (char > 90) {
      char -= 26;
    } else if (char < 65) {
      char += 26;
    }
  } else if (char <= 122 && char >= 97) {
    char += sub;
    if (char > 122) {
      char -= 26;
    } else if (char < 97) {
      char += 26;
    }
  }
  return char;
}

var caesar = function(notEncryptedString, substitution) {
  let toAscii = stringToAscii(notEncryptedString);
  let encryptedString = "";
  let decreased_sub = substitution;
  if (substitution > 26 || substitution < -26){
    decreased_sub = decreaseSubstitute(substitution);
  }
  for (let i = 0; i < toAscii.length; i++){
    let encryptedChar = encryption(toAscii[i], decreased_sub);
    encryptedString += String.fromCharCode(encryptedChar);
  }
  return encryptedString;
}

module.exports = caesar
