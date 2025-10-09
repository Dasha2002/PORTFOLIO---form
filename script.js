/*
let a = 20;
let b = 5;

console.log(a + b);

let max = a > b ? a : b;
console.log('Наибольшее число равно', max);

console.log('Разница чисел a и b равна', (a + b) / 2);


let name = "Вадим";
console.log(`Добро пожаловать, ${name} !`);
console.log(structuredClone.length);


const age = prompt('Сколько вам лет ?');
if (age > 18 && age > 125){
    conaole.log('Доступ открыт');
} else (age < 18 || age > 125); {
    console.log('Доступ закрыт')
}

//Задача 1
function getSum (N) {
    let sum = 0;
    for(let i = 1; i <= N; i++){
        sum += i;
    }
    return sum;
}

getSum();

// Задача 2

for (let i = 0; i < 15; i++){
    if(i % 2 >= 0){
        continue
    }
    console.log(i);
}

// Задача 3

function countVowels() {
    let count = 0;
    for(let i = 1; i <= 130; i++){
        if(i % 2 === 0){
            count++;
        }
    }
    console.log(count);
}
countVowels();
*/
// Задача 4
/*
const users = [
  { name: "Аня", age: 19, isOnline: true },
  { name: "Максим", age: 25, isOnline: false },
  { name: "Ирина", age: 17, isOnline: true },
  { name: "Олег", age: 21, isOnline: false }
];

function analyzeUsers(users) {
    let count = 0;
    for(let i = 0 ; i < users.length ; i++){
        let user = users[i];
        if(user.age >= 18){
            console.log(`Подходящие пользователи: ${user.name}`);
        }
        if(user.isOnline === true){
            count ++
        }
    } 
console.log(`Пользователей онлайн: ${count}`);

console.log(`Количество пользователей: ${count}`);
}

analyzeUsers();
*/

//Задание 5
/*
const purchases = [
  { name: "Хлеб", price: 40, category: "еда" },
  { name: "Молоко", price: 60, category: "еда" },
  { name: "Тетрадь", price: 100, category: "канцтовары" },
  { name: "Шоколад", price: 70, category: "еда" },
  { name: "Ручка", price: 20, category: "канцтовары" }
];

function analyzePurchases(purchases) {

    console.log(`Общее количество покупок: ${purchases.length}`);

    let count = 0;
    let sum = 0; 
    let product = 0;
    let kanstovary = 0;

    for(let i = 0; i < purchases.length; i++){

        let item = purchases[i];
        sum += item.price;

       if(item.category === 'еда'){
        product++
       }
       
       if(item.category === 'канцтовары'){
        kanstovary++
       }

       if(item.price >= 50){
        count++
       }
    }
console.log(`Сумма покупок: ${sum}`)
console.log(`Количество еды: ${product}`)
console.log(`Количество канстоваров: ${kanstovary}`)
console.log(`Количество дорогих товаров: ${count}`)


}

const result = analyzePurchases(purchases);
console.log(result); 
*/

// Задание 6 
/*
function filterWordsByLength(words, length) {
    let result = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(words.length > length){
            result.push(word);
        }
    }
    return result;
}

const result = filterWordsByLength(["кот", "собака", "слон", "дом"], 3);
console.log(result);
filterWordsByLength();
*/

// Задание 7
/*
function sumArray (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let sumArr = arr[i];
        sum += sumArr;
    }
    return sum;
}

const sum = sumArray([2 , 3 , 9 , 1]);
console.log(sum);
*/

// Задание 8
/*
function filterWordsByLength(arr, length) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        if(word.length > length){
            result.push(word)
        }
    }
    return result;
}

const result = filterWordsByLength(['слон' , 'дом' , 'крот' , 'пот'], 3);
console.log(result)
*/

// Задание 9
/*
const orders = [
  { id: 1, customer: 'Иван', items: ['ноутбук', 'мышка'], total: 55000 },
  { id: 2, customer: 'Мария', items: ['книга'], total: 1200 },
  { id: 3, customer: 'Иван', items: ['монитор'], total: 8000 },
  { id: 4, customer: 'Алексей', items: ['клавиатура', 'мышка'], total: 3200 },
  { id: 5, customer: 'Мария', items: ['наушники'], total: 2600 }
];

// Возвращает все заказы конкретного покупателя

function getOrdersByCustomer(orders, name) {
    let result = [];
    for(let i = 0; i < orders.length; i++){
        let order = orders[i];
        if(order.customer === name){
            result.push(order)
        }
    }
    return result;
}

const result = getOrdersByCustomer(orders,'Иван');
console.log('Все заказы:', result)

// Сколько потратил всего покупатель
function getTotalSpentByCustomer(orders, name) {
    let result = 0;
    for(let i = 0; i < orders.length; i++){
        let order = orders[i];
        if(order.customer === name){
           result += order.total;
        }
    }
return result
}

const results = getTotalSpentByCustomer(orders, 'Мария');
console.log('Общие затраты:', results , 'руб.')


// Возвращает объект, где ключ — название товара, а значение — сколько раз он встречался во всех заказах
function getPopularItems(orders) {
    let result = {};
    for(let i = 0; i < orders.length; i++){
        let order = orders[i];

        for (let j = 0; j < order.items.length; j++) {
            let item = order.items[j];

        if(result[item]){
            result[item] += 1;
        }else{
            result[item] = 1;
        }
    }
    }
return result
}

const resultss = getPopularItems(orders);
console.log(resultss)



function getEvenNumbers(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(num % 2 === 0){
            result.push(num);
        }
    }
    return result
}

const resultGetEvenNumbers = getEvenNumbers([3, 5, 7, 2, 14, 12, 39, 28]);
console.log(resultGetEvenNumbers)
*/


// Задание 10
/*
function solution(str) {
    let result = [];
    if(str.length % 2 !== 0){
        str += '_'
    }
    for(let i = 0; i > str.length; i++){
        result.push(str.slice(i, i + 2))
    }
    return result
}

const resUlt = solution('dmfmf');
console.log(resUlt);
*/

/*

// МЕТОДЫ //

// Числа //

// 1 (toFixed)

const price = 99.99
const roundedPrice = price.toFixed(0)
console.log(`Округленная цена:`, roundedPrice) // 100

// 2 (toPrecision)

const num = 100.055
consle/log(num.toPrecision(4)) //100.1

// 3 (toString)

const nums = 100
console.log(nums.toString()) // 100 - строка

// 4 (Math)

console.log(`Слцчайное число:` , Math.random())

console.log(`Возведение в степень:` , Math.pow(2, 10))

console.log(`Квадратный корень` , Math.sqrt(16))

console.log(`Кубический корень` , Math.cbrt(9)) 

console.log(`Минимальное число`, Math.min(0, 12, 23, -2, -10, 17))

console.log(`Максимальное число` , Math.max(19, -5, 28, 156, 212, 10))

console.log(`Округление до ближайшего целого` , Math.round(3.49)) // 3

console.log(`Округление до ближайшего целого ВНИЗ` , Math.floor(3.5)) // 3

console.log(`Округление до ближайшего целого ВВЕРХ` , Math.ceil(3.49)) // 4


// 5 (parseInt) Преобразование строки в число, если в строке есть текст или др. типы данных

const numberAsString = '200px'
console.log(parseInt(numberAsString)) // 200

const numberAsStringTwo = '100.5px'
console.log(parseFloat(numberAsStringTwo)) // 100.5

// 6



// 7



*/













// УПРАЖНЕНИЯ
/*
// Создать div
const div = document.createElement('div');
//Добавить класс wrapper
div.classList.add('wrapper');
//Поместить его внутрь тега body
const body = document.querySelector('body');
console.log(body);
*/
//Создать заголовок

//Добавить h1 перед div 

//Создать список

//Добавить 3 элемента с текстом

/*
function array (arr) {
    for(let i = 0; i <= arr.length; i++){
        
    }
}
    */



let btn = document.querySelector('.btn');

btn.addEventListener('click' , function() {
    if(btn.textContent === 'Темно'){
        btn.textContent = 'Светло';
        document.body.style.background = '#32388cff';
        localStorage.setItem('theme', 'light'); // сохраняем выбор
    }else{
        btn.textContent = 'Темно';
        document.body.style.background = 'rgb(158, 190, 254)';
        localStorage.setItem('theme', 'darck'); // сохраняем выбор
    }
})


