
// Создайте объект – информация о покупателе (не менее 5 строк) и выведите три из них.
let customer = {
    name: "Вика",
    age: 21,
    gender:"Ж",
    occupation: "Учитель",
    income: "Средний класс",
    benefits: false,
};
alert(`Имя покупателя: ${customer.name}`);
alert(`Возраст покупателя: ${customer.age}`);
alert(`Пол покупателя: ${customer.gender}`);
//Создайте объекты пользователи, заказы и рестораны с соответствующими значениями.
let customer2 = {
    name: "Виктор",
    age: 21,
    gender:"М",
    occupation: "Студент",
    income: "Средний класс",
    benefits: false,
}
let bakery = {
    id: 1362,
    name: "Пекарня 66",
    specialization: "выпечка",
    address: "г. Москва, ул. Ленина 6",
}
let order = {
    id: 127452,
    customer_name: "Виктор",
    item: "Пирог с мясом",
    total: 45,
}
let order2 = {
    id: 127476,
    customer_name: "Виктор",
    item: "Пирог с капустой",
    total: 35,
} 
let order3 = {
    id: 127476,
    customer_name: "Вика",
    item: "Булочка с корицей",
    total: 40,
}

// Организуйте вывод информации из объектов по условию.
let orders = [order, order2, order3];
let total = 0;
for (let num in orders) {
    if (orders[num].customer_name == "Виктор") {
        alert(orders[num].item);
        total += orders[num].total;
    }
}
alert(`Виктор купил еды на ${total} рублей`);
// Используя конструктор, создайте объект – студент.
function Student(name, age, degree) {
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.isStudying = true;
    this.introduction = function(){alert(`Привет! Меня зовут ${this.name}, мне ${this.age}, моя специализация ${this.degree}.`);}
    }

let myStudent = new Student("Вася", 19, "Экономика");
myStudent.introduction();
    