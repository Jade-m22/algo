// 2.3.5. Exercice 5
// Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

function findPairOnce(arr, k){
    
    let seen = new Set()

    for(i=0; i<arr.length ; i++){
        let pair = k - arr[i]
        if (seen.has(pair)){
            return true
        }
        seen.add(arr[i])
    }
    return false
}

console.log(findPairOnce([10, 15, 3, 7], 17));
console.log(findPairOnce([1, 8, 10, 21], 19));