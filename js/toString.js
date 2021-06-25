// ***TO STRING***

// Число к строке
let value = 0

// 1-й способ

let toString = String(value)
console.log(`${value}, значение через конструктор String(): `, toString)
console.log(
  `тип данных ${value}, значение через конструктор String(): `,
  typeof toString,
)

// 2-й способ

toString = value + ''
console.log(
  `${value}, значение через конкатенацию String(): `,
  toString,
  typeof toString,
)
console.log(
  `тип данных${value}, значение через конкатенацию String(): `,
  typeof toString,
)

// Число к строке
value = 1

// 1-й способ
toString = String(value)
console.log(`${value}, через конструктор String() :`, toString)

console.log(
  `тип дпанных ${value}, через конструктор String() :`,
  toString,
  typeof toString,
)

// 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
)

//Не число к строке
value = NaN

// 1-й способ
toString = String(value)
console.log(`${value}, через конструктор String() :`, toString)

console.log(
  `тип дпанных ${value}, через конструктор String() :`,
  toString,
  typeof toString,
)

// 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
)

//---------------
//БУЛЕВОЕ (логическое) true к СТРОКЕ
value = true;

// 1-й способ
toString = String(value)
console.log(`${value}, через конструктор String() :`, toString)

console.log(
  `тип дпанных ${value}, через конструктор String() :`,
  toString,
  typeof toString,
)

// 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
)

value = false

// 1-й способ
toString = String(value)
console.log(
  `${value}, через конструктор Srtring() :`,
   toString)
console.log(
  `тип данных ${value}, через конструктор Srtring() :`,
   toString, typeof toString)

   // 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
)

value = undefined

// 1-й способ
toString = String(value)
console.log(
  `${value}, через конструктор Srtring() :`,
   toString)
console.log(
  `тип данных ${value}, через конструктор Srtring() :`,
   toString, typeof toString)

   // 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
)


value = null

// 1-й способ
toString = String(value)
console.log(
  `${value}, через конструктор Srtring() :`,
   toString)
console.log(
  `тип данных ${value}, через конструктор Srtring() :`,
   toString, typeof toString)

   // 2-й способ
toString = value + ''
console.log(`${value}, через конкатенацию String(): `, toString)

console.log(
  `тип данных ${value}, через конкатенацию String(): `,
  toString,
  typeof toString,
);