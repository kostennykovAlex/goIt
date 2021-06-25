//------------TO BOOLEAN-----------

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К БУЛЮ

let value = 'Bla Bla Bla'

// 1-й способ
let toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// ЛЮБОЕ СТРОЧНОЕ ЧИСЛО К БУЛЮ

value = '123456'

// 1-й способ
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// ПУСТАЯ СТРОКА К БУЛЮ

value = ' '

// 1-й способ
toBoolean = Boolean(value)
console.log(
  `строка с пробелом ${value}, через конструктор Boolean(): `,
  toBoolean,
)
console.log(
  `тип данных строки  с пробелом ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`строка с пробелом ${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// ЧИСЛО К БУЛЮ

value = 13

// 1-й способ
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// undefined К БУЛЮ

value = undefined

// 1-й способ
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// null К БУЛЮ

value = null

// 1-й способ
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// NaN К БУЛЮ

value = NaN

// 1-й способ
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)

// Infinyity К БУЛЮ

// 1-й способ

value = Infinity

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean(): `,
  toBoolean,
  typeof toBoolean,
)

// 2-й способ
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)

console.log(`тип данных ${value}, через !!: `, toBoolean, typeof toBoolean)
