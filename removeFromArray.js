var removeFromArray = function() {
  var removedArray = arguments[0];
  var args = Array.from(arguments);
  args = args.slice(1);
  for (let i = 0; i < args.length; i++){ // passing on each element of the array.
    for (let j = 0; j < removedArray.length; j++){
      if (removedArray[j] === args[i]){
        removedArray.splice(j,1);
      }
    }
  } //  O(n * m)
  return removedArray;
}

module.exports = removeFromArray
