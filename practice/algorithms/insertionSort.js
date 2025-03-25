function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let selected = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > selected) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = selected;
    }
}

const arr = [4, -3, 0, 421, 44, 1];
console.log(arr);
insertionSort(arr);
console.log(arr);