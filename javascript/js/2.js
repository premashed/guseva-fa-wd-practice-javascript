// Реализовать представленную блок-схему посредством JavaScript
let correctAnswers = 0;
let answerOne = parseInt(prompt("Сколько будет 10+2?"));
if (answerOne == 12){
    alert("Правильный ответ!");
    correctAnswers += 1;
} else {
    alert("Неправильный ответ!");
}
let answerTwo = parseInt(prompt("Сколько будет 3*3?"));
if (answerTwo == 9) {
    alert("Правильный ответ!");
    correctAnswers += 1;
} else {
    alert("Неправильный ответ!");
}
alert(`Задачи которые Вы решили правильно: ${correctAnswers}`);
// Создайте программу для застолий, которая будет предлагать «Еще по одной?» пока пользователь не введет единицу.
let drink = 0;
function drinkingGame(drink){
    drink = parseInt(prompt("Еще по одной?"));
    if (drink == 1){
        return alert("Конец");
    } else {
        return drinkingGame(drink);
    }
}
drinkingGame(drink);
// Напишите программу на Java Script, которая считает от 1 до 10.
function counter(n){
    for (let i = 1; i < n+1; i++) {
        alert(i);
      }
}
counter(10);
// Вычислите факториал числа (вашего порядкового номера в журнале).
function factorial(num){
    if (num === 0){
        return 1; 
    }else{
        return num * factorial(num - 1); 
    }
}
alert(`Факториал 14: ${factorial(14)}`);
//Напишите программу, которая проверяет вашу фамилию на палиндром.
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}
alert(`Является ли фамилия Гусева палиндромом: ${isPalindrome("Гусева")}`);
//Выведите все простые числа от 1 до вашего порядкового номера в журнале.
counter(14);