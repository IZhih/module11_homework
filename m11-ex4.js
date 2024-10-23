// Задание 4

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let startNum = prompt("Введите стартовое число. С него будет начинаться счёт: ");
let endNum = prompt("Введите конечное число. Им счёт будет заканчиваться: ");

while (endNum < startNum) {
  endNum = prompt(
    "Ошибка, конечное число " + startNum + " не может быть меньше стартового " + endNum + ". Попробуйте ещё раз:"
  );
}

const intervalId = setInterval(
  (function (a, b) {
    let counter = a;
    function count() {
      console.log(counter);
      counter < b ? counter++ : clearInterval(intervalId);
    }
    return count;
  })(startNum, endNum),
  1000
);
