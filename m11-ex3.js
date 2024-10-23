// Задание 3
// Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

const numA = 46;
const numB = 54;

function sum(A) {
  return function (B) {
    return A + B;
  };
}

let result = sum(numA);

console.log(result(numB));
