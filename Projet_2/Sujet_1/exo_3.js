function hasPairSumN(arr, k) {
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


console.log(hasPairSumN([10, 15, 3, 7], 17));
console.log(hasPairSumN([1, 8, 10, 21], 19));
