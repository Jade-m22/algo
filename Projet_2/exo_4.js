// 2.3.4. Exercice 4
// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

function viewBuildingCount(heights) {
  let max = 0
  let count = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      count++;
      max = heights[i];
    }
  }

  return count;
}

console.log(viewBuildingCount([3, 7, 8, 3, 6, 1]));
console.log(viewBuildingCount([1, 4, 5, 8]));
