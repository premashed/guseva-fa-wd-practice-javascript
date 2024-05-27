//Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом или нет (код из прошлой практической работы)?
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}
let word = prompt("Введите слово:")
alert(`Является ли слово ${word} палиндромом: ${isPalindrome(word)}`);
//Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения (код из прошлой практической работы).
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
//Создайте класс, который будет сохранять в переменную имя пользователя и выводить его на экран. Используйте его.
class User {
    constructor(name){
        this.name = name;
    }
    introduceYourself(){
        alert(`${this.name}`);
    }
}
let newUser = new User("Вася");
newUser.introduceYourself();
//Перепишите код с использованием синтаксиса класса:
class Person {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        alert(`Привет, меня зовут ${this.name}`);
    }
}
let vasya = new Person("Вася");
vasya.sayHi();
//Создайте класс, который переворачивает ваше имя.
class FirstName {
    constructor(name){
        this.name=name;
    }
    reverse(){
        alert(this.name.split('').reverse().join(''));
    }
}
let person = new FirstName("Вася");
person.reverse()