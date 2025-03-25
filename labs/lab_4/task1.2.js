function y(a, b, x) {
    if (x >= 0) {
        if (x < 4) return Math.cos(x);
        else if (x === 4) return (3 * x * x + b * x);
        else if (x > 4) {
            if (x < 9) return Math.log(a * x + b);
            else return "Функція не визначена";
        }
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

console.log(y(1, 1, 0));
console.log(y(1, 1, 4));
console.log(y(1, 1, 5));

console.log(y(1, 1, 9));