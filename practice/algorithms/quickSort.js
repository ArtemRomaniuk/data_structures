function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let center = [];

    for (let num of arr) {
        if (num < pivot) left.push(num);
        if (num > pivot) right.push(num);
        if (num === pivot) center.push(num);
    }

    return [...quickSort(left), ...center, ...quickSort(right)];
}

const arr = [4, -3, 0, 421, 44, 1];
console.log(arr);
console.log(quickSort(arr));