//------------TO NUMBER------------

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К ЧИСЛУ

let value = 'Bla Bla Bla'

// 1-й способ
let toNumber = Number(value)
console.log(`${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(`${value}, через унарный + : `, toNumber)

console.log(
  `тип данных ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

// СТРОЧНОЕ ЧИСЛО К ЧИСЛУ

value = '223'

// 1-й способ
toNumber = Number(value)
console.log(`${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(`${value}, через унарный + : `, toNumber)

console.log(
  `тип данных ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

// пустая строка К ЧИСЛУ

value = ''

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный + : `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

// строка с пробелом К ЧИСЛУ

value = '    '

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный + : `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

//---------------
//БУЛЕВОЕ (логическое) true к ЧИСЛУ
value = true

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный + : `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

//БУЛЕВОЕ (логическое) false к ЧИСЛУ

value = false

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный + : `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

// undefined к числу
value = undefined

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number() :`, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number() :`,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный + : `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный + : `,
  toNumber,
  typeof toNumber,
)

// null к числу

value = null

// 1-й способ
toNumber = Number(value)
console.log(`путсая строка ${value}, через конструктор Number(): `, toNumber)
console.log(
  `тип данных пустой строки ${value}, через конструктор Number(): `,
  toNumber,
  typeof toNumber,
)

// 2-й способ
toNumber = +value
console.log(` пустая строка${value}, через унарный +: `, toNumber)

console.log(
  `тип данных пустой строки ${value}, через унарный +: `,
  toNumber,
  typeof toNumber,
)
