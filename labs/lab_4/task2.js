function showSequence(n) {
    if (n < 1 || Math.floor(n) !== n) {
        console.log("n має бути натуральним числом");
        return;
    }
    for (let i = 1; i <= n; i++) {
        console.log(Math.cos(i - 1) / (i * i + 1));
    }
}

showSequence(0);
showSequence(4.5);
showSequence(1);
console.log();
showSequence(5);