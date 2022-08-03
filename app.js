const cars = ['Mazda', 'Ford', 'BMW', 'Merc'] //, 4, true]
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [        //массив объектов
    {name: 'Tom', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Viktoria', budget: 3500}
]

cars.push('Reno') //добавл в конец
cars.unshift('Porshe') //добавл в начало

console.log(cars)

cars.shift() //удаляет 1ый элем массива
const firstCar = cars.shift() //удаляет и возвращает 1ый элем массива
const lastCar = cars.pop()    //удаляет и возвращает послед элем массива
console.log(cars.reverse()) //переворачивает массив (array)


//split('') - вернет массив с элементами-буквами (или другой разделитель)
//join('') - вернет строку, соединив элементы массива
//Задача: реверсировать строку
const text = 'Привет, мы изучаем Javacript'
const reverseText = text.split('').reverse().join('') //tpircavaJ меачузи ым ,тевирП (string)
console.log(reverseText)

//['Merc', 'BMW', 'Ford']

//Поиск: indexOf() - поиск примитивных типов данных (строки, числа...). 
const index = cars.indexOf('BMW') //1  //если не нашли, то вернет -1
cars[index] = 'Porshe'  //теперь можем изменить

//Поиск: findIndex() или find() - поиск по массиву с объектами. По сути реализуют циклы по массиву
const peopleIndex = people.findIndex(function(person) {   //1
    return person.budget === 3500
})
const foundPerson = people.find(function(person) {   //{name: 'Elena', budget: 3500}  //если не нашел, то undefined
    return person.budget === 3500                    //1ый найденный элемент
})
//упростим:
const foundPerson2 = people.find(person => person.budget === 3500)  
console.log(foundPerson2)

//реализуем find() с помощью цикла 
let findPerson
for (const person of people) {
    if (person.budget === 3500) {
        findPerson = person
    }
}
console.log(findPerson)


console.log(cars.includes('Ford'))  //true      //наличие элемента

//map() создаёт НОВЫЙ массив с результатом вызова указанной функции для каждого элемента массива. По сути реализует цикл по массиву
const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)

const powFib = fib.map(num => num ** 2)
console.log(powFib)
//"украсим":
const pow2 = num => num ** 2
const powFib2 = fib.map(pow2) 
console.log(powFib2)
//еще
const sqrt = num => Math.sqrt(num)
const sqrtPowFib = fib.map(pow2).map(sqrt)
console.log(sqrtPowFib)
//или тоже самое:
const sqrtPowFib2 = fib.map(pow2).map(Math.sqrt)  //??????????
console.log(sqrtPowFib2)


//filter() также создает НОВЫЙ массив
const ar = [1, 1, 4, 9, 25, 64, 169]
const filterNumbers = ar.filter(num => num > 20)
console.log(filterNumbers)

//объединяет все значения массива, можно работать со всеми значениями массива
const people2 = [        //массив объектов
    {name: 'Tom', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Viktoria', budget: 1700}
]
//неверно, чуть ниже перепишем
const allBudget  = people2.reduce(function(sum, person){ 
    if (person.budget > 2000) {
        sum += person.budget
    }
    return sum
}, 0)  //0 - это нач знач sum
console.log(allBudget)
//перепишем. Ченнинг - когда подряд вызываем методы
const allBudget2  = people2
    .filter(person => person.budget > 2000)
    .reduce((sum, person) => {
        sum += person.budget
        return sum
}, 0)  
console.log(allBudget2)


 





