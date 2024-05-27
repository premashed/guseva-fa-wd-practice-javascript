//Воспользовавшись методом map(), создайте новый массив из имеющегося, который содержит увеличенные элементы на 10 и в три раза.
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.map(element => (element + 10) * 3);
alert(`Массив: ${numArr}`); 
alert(`Массив после преображения: ${newNumArr}`); 
//Имеется массив «год рождения». Необходимо вывести их возраст.
const birthYearArr = [1999, 2001, 2005, 2004, 1997];
var currentTime = new Date();
var year = currentTime.getFullYear();
const ageArray = birthYearArr.map(elem => year -elem);
alert(`Года рождения: ${birthYearArr}`); 
alert(`Возраст: ${ageArray}`); 
//Предположим, у нас имеется массив, содержащий объекты, в свойствах которых хранятся сведения об имени и возрасте представителей некой группы людей. Нам надо создать массив, в котором будут сведения только о совершеннолетних представителях этой группы (тех, чей возраст достиг 18 лет).
const students = [
    { name: "Вася", age: 20 },
    { name: "Вика", age: 17 },
    { name: "Виктор", age: 19 }
  ];
const adults = students.filter(student => student.age >= 18).map(student => student.name);
//Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.
const users = [
    { name: "Вася", rights: true },
    { name: "Вика", rights: false },
    { name: "Виктор", rights: false }
  ];
const admins = users.filter(user => user.rights === true).map(user => user.name);
alert(`Список пользователей с правами: ${admins}`);  
// Вычислите средний балл студентов используюя reduce 
const gradesArr = [99, 54, 5, 29, 90, 85, 87, 67];
const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
const averageGrade = arr => sum(arr) / arr.length;
alert(`Средняя оценка: ${averageGrade(gradesArr)}`);  
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
const transformArr = arr => arr.map(elem => elem.length <= 3? 0 : 1);
alert(strArray);
alert(`Новый массив: ${transformArr(strArray)}`);