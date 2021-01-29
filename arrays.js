var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var narray = [element, ...array]
  return narray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
