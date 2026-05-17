console.log('-------------task-6-------------');

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(['a', 'b', 'c']); // "a"
getFirstElement([true, false, true]); // true

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(['a', 'b', 'c']));
console.log(getFirstElement([true, false, true]));
