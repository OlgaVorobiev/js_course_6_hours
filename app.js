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
