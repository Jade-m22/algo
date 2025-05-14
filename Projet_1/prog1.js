const fs = require('fs');

let comparaisonCount = 0;

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    comparaisonCount++;
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}


function main() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error("Erreur : merci de fournir un fichier en argument.");
    process.exit(1);
  }

  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const array = data.trim().split(/\s+/).map(Number);

    comparaisonCount = 0;
    const sorted = mergeSort(array);

    console.log(`Tri fusion: ${comparaisonCount} comparaisons - [${sorted.join(', ')}]`);
  } catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err.message);
  }
}

main();
