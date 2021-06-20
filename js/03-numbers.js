let elementWidht = '50px';

// elementWidht = Number.parseInt(elementWidht);
// console.log('elementWidht: ', elementWidht);


let elemrntHeigth = '200.74px';
// elemrntHeigth = Number.parseFloat(elemrntHeigth);
// console.log('elemrntHeigth: ', elemrntHeigth);




let salary = 1300.005484;
// salary =  Number(salary.toFixed(2))
// console.log(salary);

// let quantity = '30';
// let value = 'эту троку невозможно привеси к числу';
// console.log(Number(quantity));
// console.log(Number(value));

// const base = 2;
// const power = 7;

// console.log(Math.pow(base, power));
// console.log(base ** power);

// let base = prompt('Давай число!');
// base = Number(base);
// console.log(base);


// let power = prompt('Давай сtепень');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);
// const max = 80
// const min = 10
// const result = Math.round(Math.random() * (max - min) + min)

// console.log(result);

const colors = ['tomato', 'teal', 'orange', 'red', 'blue'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;