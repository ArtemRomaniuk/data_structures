let arr = [];
for (let i = 0; i < 29; i++) {
    arr[i] = Math.floor(Math.random() * 51);
}
console.log(arr);

function reverseSelectionSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let minIndex = i;
        for (let j = arr.length - 1 - (arr.length - i); j >= 0; j--) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

reverseSelectionSort(arr);
console.log(arr);