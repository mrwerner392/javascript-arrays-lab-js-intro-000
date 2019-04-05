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

// modifies kittens array by removing its last item
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// modifies kittens array by removing its first item
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// appends an item to kittens array without modifying it
function appendKitten(newKitten) {
  return kittens.concat(newKitten);
}