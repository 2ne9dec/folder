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

    const partition = (arr, left, right) => {
        const pivotPositon = Math.floor(Math.random() * arr.length);
        const pivot = arr[pivotPositon];
        while (right >= left) {
            while (arr[right] > pivot) {
                right--;
            }
            while (arr[left] < pivot) {
                left++;
            }
            if  (right >= left) {
                const tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
                right--;
                left++;
            }
        }
        return left;
    };
    const qsort = (arr, left = 0, right = arr.length-1) => {
        if (left < right) {
            const index = partition(arr, left, right);
            qsort(arr, left, index-1);
            qsort(arr, index, right);
        }
        return arr;
    };
    button[0].addEventListener('click', () => {
        result[0].append(qsort(arr));
    });
    button[1].addEventListener('click', () => {
        result[1].append(arr.reverse());
    });

