// isNaN() проверка на НЕчисло
// let value
// console.log(value, 'не число: ', isNaN(value))

//НЕ являються не числом, то есть они числа

// value = 1
// console.log(value, 'не число: ', isNaN(value))

// value = 0
// console.log(value, 'не число: ', isNaN(value))

// value = ' '
// console.log(value, 'не число: ', isNaN(value))

// value = Infinity
// console.log(value, 'не число: ', isNaN(value))

// value = true
// console.log(value, 'не число: ', isNaN(value))

// value = false
// console.log(value, 'не число: ', isNaN(value))

// value = null
// console.log(value, 'не число: ', isNaN(value))

// value = ''
// console.log(value, 'не число: ', isNaN(value))

// value = NaN
// console.log(value, 'не число: ', isNaN(value))

// value = 'Alex'
// console.log(value, 'не число: ', isNaN(value))

//CТРОКИ

// console.log(typeof `string`, `string`)
// console.log(typeof 'string', 'string')
// console.log(typeof 'string', 'string')

//length
// let myString = 'I love JavaScript!'
// console.log(myString)
// console.log(myString.length)

// //position & index
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[3])
// console.log(myString[4])
// console.log(myString[5])
// console.log(myString[6])
// console.log(myString[7])
// console.log(myString[18])

//toLowerCase() ?  toUperCase()

// console.log(myString.toLowerCase())
// console.log(myString.toUpperCase())

// indexOf() &  includes()

// console.log(myString.indexOf())
// console.log(myString.indexOf(' '))
// console.log(myString.indexOf('i'))
// console.log(myString.indexOf('I'))
// console.log(myString.indexOf('k'))

// console.log(myString.includes())
// console.log(myString.includes('I'))
// console.log(myString.includes(' '))
// console.log(myString.includes('i'))
// console.log(myString.includes('J'))
// console.log(myString.includes('K'))

// console.log(myString.includes());

// конкатенация, примитивы и строки

// let name = 'Alex'
// let lastName = 'Kostelllo'
// console.log(name, lastName)

// let fullName = name + ' ' + lastName
// console.log(fullName)

// let greeting =
//   'Hello' + ' ' + name + ' ' + lastName + '!' + ' ' + 'Im gled to see you'
// console.log(greeting)

// шаблонная строка интерполяция ${variable}
// greeting = `Hello ${name} ${lastName} ! Im greit to see you!`
// console.log(greeting)

// спосоьы приведения типов к
// строке: String(value) || value+""
// let myValue = true
// console.log(myValue, typeof myValue)

// let result = String(myValue)
// console.log(result, typeof result)

// result = myValue + ''
// console.log(result, typeof result)

// числу: Number(value) || +value
// console.log(myValue, typeof myValue)
// result = Number(myValue)
// console.log(result, typeof result)

// console.log(myValue, typeof myValue)
// result = +myValue
// console.log(result, typeof result)

// буеану: Boolean(value) || !!value
// console.log(myValue, typeof myValue)
// myValue = 0
// console.log(myValue, typeof myValue)

// result = Boolean(myValue)
// console.log(result, typeof result)

// result = !!myValue
// console.log(result, typeof result)

// false values
// console.log('empty string :', Boolean(''))
// console.log('0 :', Boolean(0))
// console.log('NaN :', Boolean(NaN))
// console.log('undefined :', Boolean(undefined))
// console.log('null :', Boolean(null))
// console.log('false:', Boolean(false))

// Логические операторы
// && верноет последнее  true, если все true или первое false
// console.log(1 && 'JS' && true && true)
// console.log(0 && 'JS' && true && true)

// || вернет последнее false, если все false или первое true

// console.log(1 || 'JS' || true || true)
// console.log(0 || 'JS' || true || true)
// console.log(0 || '' || true || false)

//  && приоритетнее перед ||
// console.log(0 || ('JS' && true))
// console.log((0 && 'JS') || true)

//  ! - приводит к значению Boolean и преворачивает его -  то есть
//  вернет его противоположное, но уже булевое значение
// console.log(!'')
// console.log(!0)
// console.log(!false)
// console.log(!undefined)
// console.log(!null)
// console.log(!1)
// console.log(!true)

//  !! - приводит к значению Boolean и дважды преворачивает его -  тоесть
//  т.е вернет его прямое Boolean значение.
console.log(!!'')
console.log(!!0)
console.log(!!false)
console.log(!!undefined)
console.log(!!null)
console.log(!!1)
console.log(!!true)
// Ветвления
// if(){}- одно условие
// if(){} else{} - одно условие и все остальное
// if(){} else{} if(){} else{} - множество условий
// if(){} else{} if(){} else{} if(){} else{}  - множество условий и всех
// if (true) {
//   console.log('Условие выполнено')
// }

// if (false) {
//   console.log('Условие выполнено')
// }

// if (NaN) {
//   console.log('Условие выполнено')
// }

// if (undefined) {
//   console.log('Условие выполнено')
// }

// if (Boolean) {
//   console.log('Условие выполнено')
// }

// if (Number) {
//   console.log('Условие выполнено')
// }

// if (null) {
//   console.log('Условие выполнено')
// }

// if (1) {
//   console.log('Условие выполнено')
// }

// if (0) {
//   console.log('Условие выполнено')
// }

// if ('Boolean') {
//   console.log('Условие выполнено')
// }

// let condition1 = 1
// console.log(condition1)
// if (condition1) {
//   console.log('Условие выполнено')
// } else {
//   console.log('Условие не выполнено')
// }

// let condition = 0
// console.log(condition)

// if (condition) {
//   console.log('Условие выполнено')
// } else {
//   console.log('Условие не выполнено')
// }

// console.log(condition, typeof condition)
// console.log(Boolean(condition))

// if (condition) {
//   console.log('Условие выполнено 1')
// } else if (condition + 0 + 0) {
//   console.log('Условие выполнено 3')
// } else if (condition + 0) {
//   console.log('Условие віполнено 2')
// } else {
//   console.log('Условие не выполнено')
// }

// condition = console.log(condition)
// condition
//   ? console.log('Условие выполнено')
//   : console.log('Условие не выполнено')
