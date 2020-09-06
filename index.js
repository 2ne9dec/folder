const arr = [1, 25, -5, 0, 99, -75, 76, 33, -44, 44];
const increment = [];
const decrement = [];

const div = document.querySelector('.div');
const button = document.querySelectorAll('input');
const result = document.querySelectorAll('.result');
div.append(arr);

button[0].addEventListener('click', () => {
    arr.sort((a, b) => a - b);
    increment.push(arr);
    result[0].append(increment);
});

button[1].addEventListener('click', () => {
    arr.sort((a, b) => b - a);
    decrement.push(arr);
    result[1].append(decrement);
});