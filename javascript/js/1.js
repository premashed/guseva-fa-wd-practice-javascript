// Создайте калькулятор, который будет выполнять все арифметические операции над любыми введенными пользователем двумя числами.
function calculator(num1, num2, action) {
    switch(action) {
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
        case "^":
            return Math.pow(num1, num2);
        default:
            return "Неправильный символ";
    }
}

let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
let action = prompt("Введите действие(+, -, *, /, ^):")

console.log(`Результат: ${calculator(num1, num2, action)}`);

// Необходимо попросить пользователя задумать число. Затем он должен умножить это число на 2 и прибавить к полученному результату 7. То, что вышло в итоге, нужно ввести в диалоговом окне prompt(). Вы должны выдать пользователю, какое число он задумал.
let secretNum = parseInt(prompt("Задумайте число, а я его угадаю:"));
let result = (secretNum-7)/2;

alert(`Вы задумали число ${result}.`);

// С помощью метода prompt() получите сначала имя пользователя, затем год его рождения и сохраните в 2 переменные. Вычислите возраст пользователя, и выведите его в абзаце с помощью document.write() в таком формате "Антон: 24".
let yourName = prompt("Введите ваше имя:");
let birthYear = parseInt(prompt("Введите год вашего рождения:"));
let age = new Date().getFullYear() - birthYear;

document.write(`${yourName}: ${age}`);
