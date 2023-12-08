function reverseList(list) {
    return list.slice().reverse();
}

let input = prompt('Введите массив (например, 1,2,3,4,5): ');
let list = input.split(',').map(Number);
console.log(reverseList(list));
