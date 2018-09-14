 //#region 双向链表
 function DoubleLinkList() {
     let Node = function (element) {
         this.element = element;
         this.next = null;
         this.prev = null;
     };
     let length = 0;
     let head = null;
     let tail = null;
     //#region 链表基本方法
     //链表尾部添加元素
     this.append = function (element) {
         //设置待添加节点属性
         let node = new Node(element);
         let current;
         //链表第一个节点
         if (head == null) {
             head = node;
         } else {
             //找到最后一项,将其next赋值为node，建立链接
             current = tail;
             current.next = node;
             node.prev = current;
             tail = node;
         }
         length++;
     };

     //链表指定位置插入元素
     this.insert = function (position, element) {
         //检查指定位置是否越界
         if (position > -1 && position <= length) {
             let node = new Node(element);
             let current = head;
             let index = 0;
             let previous;
             //插入头部
             if (position === 0) {
                 if (!head) {
                     head = node;
                     tail = node;
                 } else {
                     node.next = current;
                     current.prev = node;
                     head = node;
                 }
             } else if (position === length) { //最后一项插入
                 current = tail;
                 current.next = node;
                 node.prev = current;
                 tail = node;
             } else {
                 //中间插入
                 while (index++ < position) {
                     previous = current;
                     current = current.next;
                 }
                 node.next = current;
                 previous.next = node;
                 current.prev = node;
                 node.prev = previous
             }
             length++;
             return true;
         } else {
             //指定位置越界  插入失败
             return false;
         }
     };

     //删除指定位置元素并返回该元素
     this.removeAt = function (position) {
         //检查越界值
         if (position > -1 && position < length) {
             let current = head,
                 previous, index = 0;
             //移除第一项
             if (position === 0) {
                 head = current.next;
                 //如果只有一项，则更新tail
                 if (length === 0) {
                     tail = null;
                 } else {
                     head.prev = null;
                 }
             } else if (position == length - 1) { //删除最后一项
                 current = tail;
                 tail = current.prev;
                 tail.next = null;
             } else {
                 while (index++ < position) {
                     previous = current;
                     current = current.next;
                 }
                 //将previous与current的下一项连接起来,跳过current，从而将current移除
                 previous.next = current.next;
                 current.next.prev = previous;
             }
             length--;
             //返回被移除的元素
             return current.element;
         } else {
             //指定位置越界则返回null  删除失败
             return null;
         }
     };

     //删除指定元素
     this.remove = function (element) {
         let position = this.indexOf(element);
         return this.removeAt(position);
     };

     //获取指定元素在链表的位置
     this.indexOf = function (element) {
         let current = head;
         let index = 0;
         while (current) {
             if (current.element === element) {
                 return index;
             }
             index++;
             current = current.next;
         }
         return -1;
     };

     //判断链表是否为空
     this.isEmpty = function () {
         return length === 0;
     };

     //获取链表的长度
     this.size = function () {
         return length;
     };

     //获取链表头部节点元素
     this.getHead = function () {
         return head;
     };

     //将linklist转换成字符串
     this.toString = function () {
         let current = head;
         let strValue = '';
         while (current) {
             strValue += current.element + (current.next ? ',' : '');
             current = current.next;
         }
         return strValue;
     };

     //打印
     this.print = function () {
         console.log(this.toString());
     };
     //#endregion
 }
 //#endregion