// 2.2. Sujet 2
// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// 2.3.2. Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

function viewBuilding(heights) {
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    let hasView = true;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        hasView = false;
        break;
      }
    }
    if (hasView) {
      count++;
    }
  }

  return count;
}

console.log(viewBuilding([3, 7, 8, 3, 6, 1]));
console.log(viewBuilding([1, 4, 5, 8]));
