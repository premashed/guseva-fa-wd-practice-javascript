//Воспользовавшись методическим указанием реализуйте Калькулятор в виде стрелочных функций.
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
const calculator = (num1, num2, action) => {
    switch(action) {
        case "+":
            return add(num1,num2);
        case "-":
            return substract(num1,num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Неправильный символ";
    }
}
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
let action = prompt("Введите действие(+, -, *, /):")
alert(`Результат: ${calculator(num1, num2, action)}`);
//Используя Function Expression реализуйте проверку условий тестовых заданий.
const testConditions = [
    { name: "Тест 1", condition:true},
    { name: "Тест 2", condition:false}
];
const testSample = false;
testConditions.forEach(test => {
    if (testSample === test.condition) {
        alert(`${test.name} пройден`);
    } else {
        alert(`${test.name} завален`);
    }
});

//Реализуйте в виде стрелочной функции функцию, проверяющую вашу фамилию на полиндром.
const isPalindrome = surname => {
    const reversedSurname = surname.split('').reverse().join('');
    return surname.toLowerCase() === reversedSurname.toLowerCase();
};
let word = prompt("Введите слово:")
alert(`Является ли слово ${word} палиндромом: ${isPalindrome(word)}`);
//Реализуйте в виде стрелочной функции вычисление среднего значения данных в массиве
const calcAverage = arr => {
    return arr.reduce((acc, value) => acc + value, 0) / arr.length;
};
arr = Array.from({ length: 9 }, () => Math.floor(Math.random() * 41) - 10);
alert(arr);
alert(`Среднее арифметическое чисел массива: ${calcAverage(arr)}`);
//В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.
const daysUntilNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear(), 11, 31);
    return Math.ceil((newYear.getTime() - now.getTime() )/ (1000 * 3600 * 24));
};
alert(`Дней до Нового года: ${daysUntilNewYear()}`);
//Создайте пустую стрелочную функцию возвращает undefined
const emptyFunction = () => {};
alert(emptyFunction());
//Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2.
alert(arr);
const arrSum = arr => arr.reduce((a, b) => a + b, 0);
const arrEven= arr => arr.filter(a => a % 2 === 0);
const arrDouble = arr => arr.map(val => val * 2);
alert(`Сумма массива: ${arrSum(arr)}`);
alert(`Четные элементы массива: ${arrEven(arr)}`);
alert(`Удвоенный массив: ${arrDouble(arr)}`);
//Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.
const emails = ["example@example.com", "test@test.com", "info@domain.com"];
const filterEmails = emails => emails.sort();
alert(filterEmails(emails))