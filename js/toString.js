// ***TO STRING***

// Число к строке
let value = 0

// 1-й способ

let toString = String(value)
console.log(
  `${value}, значение через конструктор String(): `,
  toString,
  typeof toString,
)

// 2-й способ
toString = value + ''
console.log(
  `${value}, значение через конкотенацию String(): `,
  toString,
  typeof toString,
)

value = 1

// 1-й способ
let toString = String(value)
console.log(`${value}, через конструктор String() :`, toString)
