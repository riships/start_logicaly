function totArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(totArr([1, 2, 3, 8, 20, 90]));