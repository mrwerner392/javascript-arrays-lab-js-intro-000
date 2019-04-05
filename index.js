// define kittens array
var kittens = ['Milo', 'Otis', 'Garfield'];

// modifies kittens array by appending an item to the end of it
function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten);
  return kittens;
}

// modifies kittens array by prepending an item to the beginning of it
function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten);
  return kittens;
}
