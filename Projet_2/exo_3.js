// 2.3.3. Exercice 3
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

function findPairSum(arr, k) {
  const seen = new Set();

  for (let num of arr) {
    const complement = k - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}


console.log(findPairSum([10, 15, 3, 7], 17));
console.log(findPairSum([1, 8, 10, 21], 19));
