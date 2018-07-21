var palindromes = function(string) {
  let editedString = string;
  editedString = editedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
  editedString = editedString.toLowerCase();
  for (let i = 0, j = (editedString.length - 1); i < j; i++, j--){
    if (editedString[i] !== editedString[j]){
      return false;
    }
  }
  return true;
}

module.exports = palindromes
