function highAndLow(numbers) {
    let numArray = numbers.split(' ').map(Number);
    let maxNum = Math.max(...numArray);
    let minNum = Math.min(...numArray);
    return `Наибольшее число: ${maxNum}, Наименьшее число: ${minNum}`;
}

let numbers = prompt('Введите числа, разделённые пробелами: ');
console.log(highAndLow(numbers));
