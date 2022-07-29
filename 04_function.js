//FUNCTION

//1. function Declaration   //отличие - можем инициализировать в любом месте
function greet(name) {
    console.log('Hi - ', name)
}

greet('Lena')

//2. function Expression
const greet2 = function greet2(name) {
    console.log('Hi - ', name)
}
greet2('Tom')

console.dir(greet)

//3. Анонимные функции  //функция без имени
//  let counter = 0
//  setInterval(function() {
//      console.log(++counter)
//  }, 1000)

//еще пример с интервалом
// let counter2 = 0
// const interval = setInterval(function() {
//     if (counter2 === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter2)    
//     }
// }, 1000)

//еще есть setTimeout() не поняла как работает

//4. Стрелочные функции

const func1 = function func1(a, b) {
    console.log('Hi!', a, ' & ', b)
}

const func2 = a => console.log('Hi!', a)
const func3 = (a, b) => console.log('Hi!', a, ' & ', b)

func1('Lina', 'Tom')
func2('Lina')
func3('Lina', 'Tom')

const pow = num => num ** 2
console.log(pow(5))

//Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
console.log(sum(4, 4))
console.log(sum())

//оператор rest который принимает неограниченное кол-во параметров
function sumAll(...all) {
    console.log(all)
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

//замыкание. Используется для создания приватных переменных чтобы защитить данные, тк в JS нет нативного механизма создания приватных переменных
function createMember(name) {
    return function(lastName) {
        console.log(name, lastName)
    }
}
const logWithLastName = createMember('Tom')
logWithLastName('Ivanov')
logWithLastName('Petrov')
