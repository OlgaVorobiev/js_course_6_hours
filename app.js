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
console.log(num1 == num2)
console.log(num1 === num2)