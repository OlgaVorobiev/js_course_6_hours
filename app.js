////1. переменные (используем стайл cameCase)

//var name = 'Olga' deprecated - устарело
// const myName = 'Olga' //const не меняем. const предпочтительнее чем let если не меняем
// let age = 'age?'

// age = 30

// console.log(age + 10)

// //имя переменной:
// const _myConst = 1
// const _ = 1
// const $ = 1
//const 5myConst = 1 //err

////2. Мутирование. Concatenation - (склеивание строк по сути)
// console.log('The name is ' + myName + ', and the age is ' + age)
// //у перем age, кот число закулисами вызывается age.toString()
// console.log('The name is ' + myName + ', and the age is ' + age.toString())

// const lastName = prompt('Insert lastName: ')
// alert(myName + ' ' + lastName)

////3. Операторы
// let currentYear = 2022
// const a = 10
// const b = 5
// let c = 32

// c += a //c = c + a


// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// //console.log(currentYear++) сначала выведет, потом инкрементирует
// console.log(++currentYear)
// console.log(currentYear)
// console.log(--currentYear)
// console.log(c)

////4. Типы данных
const isProgrammer = true
const name = 'Olga'
const age = 34
let x
const y = null

console.log(typeof isProgrammer) //boolean
console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof x) //undefined
console.log(typeof y) //тут какой-то баг, выводит как object, хотя должен null

//5. Приоритет операторов
const fullAge = 34
const birthYear = 1988
const currentYear = 2022
const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)

//6. условные операторы
const courseStatus = 'pending' //ready, fail, pending

if (courseStatus === 'ready') {
    console.log('The course is ready')
} else if (courseStatus === 'pending') {
    console.log('The course is in progress')
} else {
    console.log('The course are not defined')
}

const num1 = 42
const num2 = '42'
console.log(num1 == num2) //true // == оператор приводит к типу число
console.log(num1 === num2) //false // не приводит

const isReady = true
// if (isReady) {
//     console.log('All is ready!')
// }

isReady ? console.log('All is ready!') : console.log('Nothing is ready!') //ternary operator

//7. Булевая логика

//8. Функции

function calculateAge(year) {
    return 2022 - year
}

//console.log(calculateAge(1988))

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age > 0) {
    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Введенный год больше текущего!')
    }
}

logInfoAbout('Tom', 1990)
logInfoAbout('Eva', 2030)

//9. Array
//const cars = new Array('mazda', 'mercedes', 'ford') - под капотом
const cars = ['mazda', 'mercedes', 'ford'] //js сам преобразует в выражение выше

console.log(cars.length)
console.log(cars[0])
console.log(cars[3])

cars[0] = 'Porsche'
cars[cars.length] = 'mazda' 
console.log(cars)

//10. Циклы
const bestCars = ['mazda', 'mercedes', 'ford']

for (let i = 0; i < bestCars.length; i++) {
    const car = bestCars[i] //??? let
    console.log(car)
}
//в последней версии JS появился цикл forof
for (let car of bestCars) {
    console.log(car)
}

// 11.Объекты (что-то вроде группировки значений, но в отличии от массива создаем различные структуры)

//const person = new Object({})   //под капотом
const person = {        //перечисляем свойства как ключ-значение
    firstName: 'Tom',  
    lastName: 'Petrov',
    year: 1990,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet for person')
    } //Это метод (функция, определеная в контексте объекта)
}
//способы обращения к свойствам и методам
console.log(person.firstName) //1.

person.greet()