function y(a, b, x) {
    if (x >= 0) {
        if (x < 9) return (Math.cos(x) * 3 * x * x + b * x * Math.log((a * x + b)));
        else return "Функція не визначена";
    }
    else {
        let isException = (a * x + b) <= 0 ? true : false;
        switch (isException) {
            case true:
                return "Помилка: підлогарифмічний вираз не може бути меншим або дорівнювати 0!";
                break;
            default:
                return "Функція не визначена";
                break;
        }
    }
}

console.log(y(2, 2, -3));
console.log(y(1, 2, -1));
console.log(y(1, 1, 1));
console.log(y(1, 1, 9));