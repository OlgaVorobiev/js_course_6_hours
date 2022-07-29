//const myName = new String('Tom')  //под капотом . поэтому нам доступны методы 
const myName = 'Tom'
const age = 30
function getAge() {
    return age
}

const output1 = 'Привет, меня зовут ' + myName + ' и мой возраст ' + age + ' лет.'
const output2 = `Привет, меня зовут ${myName} и мой возраст ${getAge()} лет. ${age <= 25 ? 'A' : 'B'}`
 const output3 = `
 <div>This is div</div>
 <p>This is p</p>
 `
console.log(output3)

const myStr = 'My new simple string.'
console.log(myStr.length)
console.log(myStr.toUpperCase())
console.log(myStr.toLocaleLowerCase())
console.log(myStr.charAt(3))
console.log(myStr.indexOf('new'))
console.log(myStr.indexOf('555'))
console.log(myStr.toLocaleLowerCase().startsWith('my'))
console.log(myStr.endsWith('r'))
console.log(myStr.repeat(3))
console.log(myStr.repeat(3))
const str = '     password    '
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

function logPerson(s, name, age) {
    //это нужно для возможности осуществления валидации переменных. Напр:
    if (age <= 0) {
        age = 'Еще не родился!'
    }
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Tom'
const personAge = 30
const outputResult = logPerson`Имя: ${personName}, Возраст: ${personAge}!` 
console.log(outputResult)

const personName2 = 'Ivan'
const personAge2 = 0
const outputResult2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(outputResult2)