const arr = [];

function randomNum (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};

for (let i = 0; i < 10; i++) {
    arr.push(randomNum(-99, 99));
};

    const div = document.querySelector('.div');
    const button = document.querySelectorAll('input');
    const result = document.querySelectorAll('.result');
    div.append(arr);

    
    function quickSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        const pivot = arr.length / 2;

        const more = [];
        const less = [];

        for (let j = 0; j < arr.length; j++) {

            if (j <= pivot) {
                less.push(arr[j]);
            }

            else {
                more.push(arr[j]);
            }
        }
        console.log({
            ...quickSort(less),
            pivot,
            ...quickSort(more)
        });
    };
    quickSort(arr);