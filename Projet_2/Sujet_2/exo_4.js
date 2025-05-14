function countBuildingsWithViewN(heights) {
  let max = -Infinity;
  let count = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      count++;
      max = heights[i];
    }
  }

  return count;
}

console.log(countBuildingsWithViewN([3, 7, 8, 3, 6, 1]));
console.log(countBuildingsWithViewN([1, 4, 5, 8]));
