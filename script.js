// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cub(a) {
  return (x = a ** 3);
}
console.log(cub(2) + cub(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
// "Размер заработной платы за вычетом налогов равен значение"

function nalog(a) {
  return (chistDohod = a * 0.87);
}

const dohod = +prompt("Введите вашу зарплату");
console.log(`Размер заработной платы за вычетом налогов равен ${nalog(dohod)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение
// среди этих чисел

function max(a, b, c) {
  let x = a;
  if (x < b) {
    x = b;
  }
  if (x < c) {
    x = c;
  }
  return x;
}

const first = +prompt("Введите первое число");
const second = +prompt("Введите второе число");
const third = +prompt("Введите третье число");

console.log(max(first, second, third));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну
// из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия
//     функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако,
//     обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0,
//     если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (a, b) => {
  return a + b;
};

const raz = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

const proiz = (a, b) => {
  return a * b;
};

const chast = (a, b) => {
  return a / b;
};

const firstNum = +prompt("Введите первое число");
const secondNum = +prompt("Введите второе число");

console.log(sum(firstNum, secondNum));
console.log(raz(firstNum, secondNum));
console.log(proiz(firstNum, secondNum));
console.log(chast(firstNum, secondNum));
