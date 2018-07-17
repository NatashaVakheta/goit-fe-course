const numbers = [];

do {
    let userInput = prompt('Введите число');
    if (userInput == null) { break; }
    if (isNaN(Number(userInput))) {
        alert('Вводите только числа!');
    } else {
        numbers.push(userInput);
    }
} while (true);

let summa = 0;

for (let val of numbers) {
    summa += Number(val);
}

if (numbers.length > 0) {
    alert('Общая сумма чисел равна '+summa);
}
