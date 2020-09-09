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

    const partition = (arr, low, hi) => {

        const pivotPositon = Math.floor(Math.random() * arr.length);
        const pivot = arr[pivotPositon];
        while (hi >= low) {
            while (arr[hi] > pivot) {
                hi--;
            }
            while (arr[low] < pivot) {
                low++;
            }
            if  (hi >= low) {
                const tmp = arr[low];
                arr[low] = arr[hi];
                arr[hi] = tmp;
                hi--;
                low++;
            }
        }
        return low;
    }

    const qsort = (arr, low = 0, hi = arr.length-1) => {
        if (low < hi) {
            const index = partition(arr, low, hi);
            qsort(arr, low, index-1);
            qsort(arr, index, hi);
        }
        return arr;
    };

    console.log(qsort(arr));