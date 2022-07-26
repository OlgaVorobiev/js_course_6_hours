//Numbers
const numInt = 42
const numFloat = 42.2
const numPow = 10e3   //10000

console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)   //9007199254740991
console.log('Math.pow 53', Math.pow(2, 53) - 1)
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