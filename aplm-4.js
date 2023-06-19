function findingBadData(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;

        }

    }
    return count;


}
let input = [1, 2, 5];
let result = findingBadData(input);
console.log(result);