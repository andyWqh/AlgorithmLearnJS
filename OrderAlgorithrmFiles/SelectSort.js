//选择排序算法
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

    //选择排序
    this.selectSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
        }
    };

    //交换两个数位置
    this.swap = function (index1, index2) {
        //方法一
        // var temAux = array[index1];
        // array[index1] = array[index2];
        // array[index2] = temAux;

        //方法二 ES6语法
        [array[index1], array[index2]] = [array[index2], array[index1]];
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

//测试选择排序
$(function () {
    var array = createNodeSort();
    console.log("测试选择排序=》排序前原数组:");
    console.log(array.print());
    //排序
    array.selectSort();
    //排序后的值
    console.log("测试选择排序=》排序后数组:");
    console.log(array.print());
});