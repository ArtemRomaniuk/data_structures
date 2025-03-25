function y(a, b, x) {
    if (a * x + b <= 0) return "Помилка: підлогарифмічний вираз не може бути меншим або дорівнювати 0!"

    if (x < 0) return "Функція не визначена";

    if (x >= 0 && x < 9) return (Math.cos(x) * 3 * x * x + b * x * Math.log((a * x + b)));

    if (x >= 9) return "Функція не визначена";
}

console.log(y(2, 2, -3));
console.log(y(1, 2, -1));
console.log(y(1, 1, 1));
console.log(y(1, 1, 9));