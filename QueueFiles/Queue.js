//#region 队列的使用
$(function () {
    //实例化队列Queue对象
    let queue = new Queue();
    //验证队列是否为空
    console.log(queue.isEmpty());

    //队列添加元素
    queue.enqueue("andyWqh");
    queue.enqueue("Wileson");
    queue.enqueue("Jack");
    //输出队列的元素长度
    console.log(queue.size());
    //打印队列元素
    queue.print();
    //移除队列队首元素
    queue.dequeue();
    console.log(queue.size());
    queue.print();
});
//#endregion

//#region 定义一个类对象模拟队列的存储原理
function Queue() {
    //定义数据来存储数据
    let data = [];
    //向队列添加元素
    this.enqueue = function (element) {
        data.push(element);
    };
    //移除队列第一个元素
    this.dequeue = function () {
        return data.shift();
    };
    //返回队列第一个元素
    this.front = function () {
        //数组第一个元素 下标为0
        return data[0]
    };
    //检查队列是否为空
    this.isEmpty = function () {
        return data.length == 0;
    };
    //返回队列的长度
    this.size = function () {
        return data.length;
    };
    //打印队列元素
    this.print = function () {
        console.log(data.join(","));
    };
};
//#endregion