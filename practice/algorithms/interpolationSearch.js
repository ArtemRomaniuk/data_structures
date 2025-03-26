function interpolationSearch(sortedArr, element) {
    let low = 0;
    let high = sortedArr.length - 1;

    while (low < high && sortedArr[low] <= element && element <= sortedArr[high]) {
        let mid = low + Math.floor((element - sortedArr[low]) * (high - low) / (sortedArr[high] - sortedArr[low]));

        if (element === sortedArr[mid]) return mid;
        if (element > sortedArr[mid]) low = mid + 1;
        if (element < sortedArr[mid]) high = mid - 1;
    }
    return -1;
}

console.log(interpolationSearch([10, 22, 35, 40, 50], 35));
console.log(interpolationSearch([10, 20, 30, 40, 50], -30));