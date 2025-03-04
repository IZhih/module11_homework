// Задание 2
// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

console.log(primeNumbers(+prompt("Введите число от 1 до 1000:")));

function primeNumbers(number) {
  if (number >= 1 && number <= 1000) {
    // Проверка корректности ввода
    console.log("Ввод корректен");
    // Число простое, если от 2 до number-1 не делилось без остатка
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        console.log('Введённое число "' + number + '" не является простым');
        return NaN;
      }
    }
    console.log('Число "' + number + '" простое');
    return number;
  } else {
    console.log(
      'Ошибка! Введённые данные "' + number + '" неверны. Число может быть в диапазоне от 1 до 1000 включительно'
    );
    return NaN;
  }
}
