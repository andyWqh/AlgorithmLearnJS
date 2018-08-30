 //#region 栈的使用实现
 window.onload = function () {
     let stack = new Stack();
     //输出栈元素的长度
     this.console.log("栈的长度:{0}".format(stack.size()));
     //添加栈元素
     for (let i = 0; i <= 10; i++) {
         stack.push(i * (i + 1));
     }
     //打印栈元素
     stack.print();

     //打印栈顶元素
     this.console.log("当前栈顶元素:{0}".format(stack.peak()));

     //输出栈元素的长度
     this.console.log("栈的长度:{0}".format(stack.size()));

     //栈实际应用 十进制转换
     var binaryNum = tenNumConvert(3000, 17);
     this.console.log(binaryNum);
 };

 function tenNumConvert(decNum, base) {
     let remStack = new Stack();
     let rem = 0;
     let binaryString = "";
     var digits = "0123456789ABCDEF";
     //用栈保存余数
     while (decNum > 0) {
         rem = Math.floor(decNum % base);
         remStack.push(rem);
         decNum = Math.floor(decNum / base);
     }
     while (!remStack.isEmpty()) {
         binaryString += digits[remStack.pop()];
     }
     return binaryString;
 };

 //#endregion

 //#region 定义一个类对象模拟栈存储原理
 function Stack() {

     //定义数组保存栈数据
     let data = [];

     //添加元素方法
     this.push = function (element) {
         data.push(element);
     };
     //移除栈顶的元素，同时返回被移除的元素
     this.pop = function () {
         return data.pop();
     };
     //返回栈顶元素
     this.peak = function () {
         return data[data.length - 1];
     };
     //判断栈是否为空
     this.isEmpty = function () {
         return data.length == 0;
     };

     //获取栈元素长度
     this.size = function () {
         return data.length;
     };

     //清空栈元素
     this.clear = function () {
         //方法一
         // data = [];
         //方法二
         for (var i = 0; i < data.length; i++) {
             data.pop();
         }
     };
     //打印栈元素
     this.print = function () {
         console.log(data.join(","));
     };
 };
 //#endregion