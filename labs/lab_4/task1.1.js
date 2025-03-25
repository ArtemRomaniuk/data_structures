function y(a, b, x) {
    if (a * x + b <= 0) return "Помилка: підлогарифмічний вираз не може бути меншим або дорівнювати 0!"

    if (x < 0) return "Функція не визначена";

    if (x >= 0 && x < 4) return Math.cos(x);
    if (x === 4) return (3 * x * x + b * x);
    if (x > 4 && x < 9) return Math.log(a * x + b);

    if (x >= 9) return "Функція не визначена";
}

console.log(y(2, 2, -3));
console.log(y(1, 2, -1));

console.log(y(1, 1, 0));
console.log(y(1, 1, 4));
console.log(y(1, 1, 5));

console.log(y(1, 1, 9));