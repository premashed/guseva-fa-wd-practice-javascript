//Сформировать массив из 15 целых чисел, выбранных случайным образом из интервала [-10, 30]. Найти среднее арифметическое положительных элементов.
let arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 41) - 10);
alert(arr);
function averagePositive(arr){
    const positives = arr.filter(number => number >0);
    return positives.reduce((a, b) => a + b, 0)/positives.length;
    }
alert(`Среднее арифметическое положительных чисел: ${averagePositive(arr)}`);
//Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения.
arr = Array.from({ length: 9 }, () => Math.floor(Math.random() * 41) - 10);
alert(arr);
function replaceNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}
alert(`Массив без отрицательных чисел: ${replaceNegatives(arr)}`);
//В заданном массиве найти среднее арифметическое положительных чисел, среднее арифметическое отрицательных чисел и число нулей.
arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 41) - 10);
alert(arr);
function getAverages(arr) {
    const positives = arr.filter(number => number >0);
    const negatives = arr.filter(number => number <0);
    const zeros = arr.filter(number => number ===0).length;
    const averagePositives =  positives.reduce((a, b) => a + b, 0)/positives.length;
    const averageNegatives =  negatives.reduce((a, b) => a + b, 0)/negatives.length;
    return [averagePositives, averageNegatives, zeros];
}
let result = getAverages(arr);
alert(`Среднее арифметическое положительных чисел: ${result[0]}`);
alert(`Среднее арифметическое отрицательных чисел: ${result[1]}`);
alert(`Количество нулей: ${result[2]}`);
//Организовать симулятор, который выдает только три случайных значения – красный, черный и белый (0, 1, 2). Запустить симуляцию 1000 000 раз. Узнать, какое максимальное число раз выпадало красное значение.
function colorPicker() {
    let redCount = 0, maxRedCount = 0;
    for (let i = 0; i < 1000000; i++) {
        const color = Math.floor(Math.random() * 3);
        if (color === 0) {
            redCount++;
        }
        if (redCount > maxRedCount) {
            maxRedCount = redCount;
        }
    }
    return maxRedCount;
}
alert(`Максимальное колличество красных: ${colorPicker()}`);