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

    //插入排序
    this.insertSort = function () {
        var length = array.length;
        var j, temp;
        for (var i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };

    //归并排序
    this.mergeSort = function (left, right) {
        var result = [];
        var il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[] ir) {
                result.push(left[il++]);
            } else {
                result.push(right(ir++));
            }
        }
        while (il < left.length) {
            result.push(left[il++]);
        }
        while (ir < right.length) {
            result.push(right[ir++]);
        }
        return result;
    };

    this.mergeSortRec = function (array) {
        var length = array.length;
        if (length == 1) {
            return array;
        }
        var mid = Math.floor(length / 2);
        var left = array.silce(0, mid);
        var right = array.silce(mid.length);
        return mergeSort(mergeSortRec(left), mergeSortRec(right));
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

//测试排序
$(function () {
    var array = createNodeSort();
    console.log("测试排序=》排序前原数组:");
    console.log(array.print());
    //排序
    array.insertSort();
    //排序后的值
    console.log("测试排序=》排序后数组:");
    console.log(array.print());
});