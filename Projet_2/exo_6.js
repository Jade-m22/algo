// 2.3.6. Exercice 6
// Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

function viewBuildingOnce(arr) {
  let maxHigh = 0;
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxHigh) {
      count++;
      maxHigh = arr[i];
    }
  }

  return count;
}

console.log(viewBuildingOnce([3, 7, 8, 3, 6, 1]));
console.log(viewBuildingOnce([1, 4, 5, 8]));