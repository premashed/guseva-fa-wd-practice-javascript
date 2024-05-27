//Создайте объекты «Клиент банка», «Работник клиники», «Гражданин РФ» с символьными значениями в том числе. Выведите их свойства на экран.
let id = Symbol("id");
let bankCustomer = {
    name: "Иван Иванович Иванов",
    creditscore: 700,
    age: 30,
    [id]: 123
};

let hospitalEmployee = {
    name: "Вика Викторовна Васиьева",
    age: 43,
    position: "врач",
    [id]: 456
};

let russianCitizen = {
    name: "Василий Васильевич Васильев",
    birthdate:"10.31.1990",
    age: 34,
    [id]: 789
};

alert(`${bankCustomer.name}, ${bankCustomer.age}, ${bankCustomer.creditscore}, ${bankCustomer.id}`);
alert(`${hospitalEmployee.name}, ${hospitalEmployee.age}, ${hospitalEmployee.position}, ${hospitalEmployee.id}`);
alert(`${russianCitizen.name}, ${russianCitizen.birthdate}, ${russianCitizen.age}, ${russianCitizen.id}`);

for (let key in bankCustomer) {
    alert(key);
}

alert("Напрямую: " + bankCustomer[id]);
// Перепишите условия "if" на "switch"
const number = +prompt("Загадайте цифру до 9", "");

switch (true) {
    case number === 1:
        alert("Вы ввели число 1");
        break;
    case number === 2:
        alert("Вы ввели число 2");
        break;
    case number >= 3 && number <= 7:
        alert(`Вы ввели число ${number}`);
        break;
    case number == 8 || number == 9:
        alert("Вы ввели число 8, а может и 9");
        break;
    default:
        alert("Неправильный ввод!");
}
// Решите через swith. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число.
const min = +prompt("Введите минуту от 0 до 59", "");

let quarterHour;

switch (true) {
    case min < 15:
        quarterHour = "первую";
        break;
    case min < 30:
        quarterHour = "вторую";
        break;
    case min < 45:
        quarterHour = "третью";
        break;
    case min > 44 || min < 60:
        quarterHour = "четвертую";
    default:
        quarterHour = "ни в одну"
}

alert(`Число ${min} попадает в ${quarterHour} четверть часа`);
// Дана строка с цифрами. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите "Первая цифра 1, 2 или 3", в противном случае выведите "нет". Проверьте наличие включения вашего номера телефона в строку.
const phoneNumber = '89123456789';
const inputString = prompt('Введите строку с цифрами', '');

switch (true){
    case inputString.charAt(0) === "1" || inputString.charAt(0) === "2" || inputString.charAt(0) === "3":
        alert(`Первая цифра 1, 2 или 3`);
        break;
    default:
        alert(`нет`);

}
switch (true){
    case inputString.includes(phoneNumber):
        alert(`Включает мой номер`);
        break;
    default:
        alert(`Не включает мой номер`);

}