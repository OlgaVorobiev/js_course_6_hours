//Numbers
const numInt = 42
const numFloat = 42.2
const numPow = 10e3   //10000

console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)   //9007199254740991  //макс число, с кот можно работать
console.log('Math.pow 53', Math.pow(2, 53) - 1)                   //9007199254740991  - это Number.MAX_SAFE_INTEGER
console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)   //-9007199254740991
console.log('Number.MAX_VALUE', Number.MAX_VALUE)                 //1.7976931348623157e+308
console.log('Number.MIN_VALUE', Number.MIN_VALUE)                 //5e-324
console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //Infinity
console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) //-Infinity   //number!
console.log('2 / 0', 2 / 0)                                       //Infinity    //number!
console.log(isFinite(Infinity)) //false  = Number.isFinite(Infinity)
console.log(isFinite(42))       //true


console.log(Number.NaN)                                           //NaN         //number! хотя переводится как 'Not a number'
console.log(NaN)   //у Number.NaN есть ключевое слово NaN
console.log(typeof NaN) //'number'
const wierd = 2 / undefined
console.log(wierd)   //NaN
//проверка на isNaN:
console.log(Number.isNaN(wierd))  //true  = isNaN(wierd)

const stringInt = '40'
const stringFloat = '40.42'
//4 варианта парсинга строки в int (одно и тоже) //42
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2) //популярнее
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)             //!универсально!
//3 варианта для float   //42.42
console.log(Number.parseFloat(stringFloat) + 2) 
console.log(parseFloat(stringFloat) + 2) 
console.log(+stringFloat + 2)           //!универсально!

//проблемы при опрерациях с числами, связанные с особенностью хранения данных в js
console.log(0.4 + 0.2) //0.6000000000000001
console.log((0.4 + 0.2).toFixed(1))   //0.6   //тип 'string' //отбрасывает все кроме 1 знака после точки и возвр-т в виде строки
console.log(+(0.4 + 0.2).toFixed(1))            //0.6  //тип 'number'   или тоже самое:
console.log(parseFloat((0.4 + 0.2).toFixed(1))) //0.6  //тип 'number' 

//BigInt - новый тип данных для работы с числами, больше чем Number.MAX_SAFE_INTEGER
console.log(900719925474099199999n - 90071992547409919999n)  //операции bigint можно произ только с bigint
console.log(-900719925474099199999n)  //отрицат bigint

//если нужно сложить 10n и 4
//console.log(10n + 4) //erroe
console.log(parseInt(10n) + 4) //14   //тип number
console.log(10n + BigInt(4))   //14n  //тип BigInt   
console.log(5n / 2n)           //2n   //тип BigInt

//3. Math   описать % - остаток от деления 10%3=1  24%5=4
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))  //5   //корень  //the square root of a number
console.log(Math.pow(5, 3)) //125 // 5 ** 3  тоже самое
console.log(Math.abs(-42))  //42  //модуль
console.log(Math.sign(-42)) //-1  //полож или отрицат (при 0 верн 0, при 50 верн 1)
console.log(Math.max(42, 12, 422, 30))  //422
console.log(Math.min(42, 12, 422, 30))  //12
console.log(Math.floor(4.9))  //4   //окр в нисшую
console.log(Math.ceil(4.9))  //5    //окр в больш
console.log(Math.round(4.9))  //5   //окр до ближ целого
console.log(Math.trunc(4.9))  //4   //целая часть числа. как и fixed() только сразу приводит к числу
console.log(Math.random())    //0.2790913597586733      //в диапазоне [0, 1), те 0 включительно

//4. Example Math.random()   //в диапаз [min, max] - (включит)
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomBetween(5, 10))