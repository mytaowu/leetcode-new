
// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 选择排序
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

// 插入排序
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1;
        let contentValue = arr[i];
        while (preIndex >= 0 && arr[preIndex] > contentValue)  {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = contentValue;
    }
    return arr;
}

// 归并排序
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // 找到中间值。
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(arr1, arr2) {
    let res = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]){
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }

    while(arr1.length > 0) {
        res.push(arr1.shift())
    }
    while(arr2.length > 0) {
        res.push(arr2.shift())
    }
    return res;
}

// 快速排序
function quickSort(arr) {
}
console.log(bubbleSort([1, 4, 9, 3, 0, 23]))
console.log(selectionSort([1, 4, 9, 3, 0, 23]))
console.log(insertionSort([1, 4, 9, 3, 0, 23]))
console.log(mergeSort([1, 4, 9, 3, 0, 23]))