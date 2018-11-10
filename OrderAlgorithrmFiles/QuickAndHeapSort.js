//插入和归并排序算法
function ArrayList() {
    //存储数据数组
    var array = [];
    //定义插入方法
    this.insert = function (item) {
        array.push(item);
    };

    //输出数组内容
    this.print = function () {
        return array.join(",");
    };

    //快速排序
    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    };

    //私有排序实现方法：拆分数组
    var quick = function (array, left, right) {
        var index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < right) {
                quick(array, left, index - 1);
            }
            if (right > index) {
                quick(array, index, right);
            }
        }
    };

    //划分过程
    var partition = function (array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    //交换两个数位置
    var swap = function (arry, index1, index2) {
        //方法一
        // var temAux = array[index1];
        // array[index1] = array[index2];
        // array[index2] = temAux;

        //方法二 ES6语法
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    //堆排序

    var buildHeap = function (array) {
        var heapSize = array.length;
        for (var i = Math.floor(array.length / 2); i >= 0; i--) {
            heapify(array, heapSize, i);
        }
    };

    var heapify = function (array, heapSize, i) {
        var left = i * 2 + 1;
        var right = i * 2 + 2;
        var largest = i;
        if (left < heapSize] && array[left] > array[largest]) {
        largest = left;
    }
    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }
    if (right != i) {
        swap(array, i, largest);
        heapify(array, heapSize, largest);
    }
};

}

//初始化数组
function createNodeSort(size) {
    var array = new ArrayList();
    //随机生成10个0到10的数
    for (var i = 0; i < 10; i++) {
        array.insert(Math.floor(Math.random() * 10 + i));
    }
    return array;
}