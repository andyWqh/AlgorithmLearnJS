//#region 链表基本操作
$ (function () {
  let linkLiist = new LinkedList ();
  //测试添加元素
  for (let index = 1; index < 10; index++) {
    linkLiist.append(index*10);
  }
  //打印链表元素
  linkLiist.print();
  //插入元素
  linkLiist.insert(4,110);
  linkLiist.print();
  //移除元素
  linkLiist.remove(30);
  linkLiist.print();
  //移除指定位置的元素
  linkLiist.removeAt(5);
  linkLiist.print();

  //指定元素在链表的位置
  console.log("70在链表的位置:{0}".format(linkLiist.indexOf(70)));
  console.log("链表的长度:{0}".format(linkLiist.size()));
  console.log("链表头部节点元素:{0}".format(linkLiist.getHead().element));
});
//#endregion

//创建链表基本数据结构
function LinkedList () {
  //自定义节点属性
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  //链表长度
  let length = 0;
  //链表头部节点
  let head = null;
  //#region 链表基本方法

  //链表尾部添加元素
  this.append = function (element) {
    //设置待添加节点属性
    let node = new Node (element);
    let current;
    //链表第一个节点
    if (head == null) {
      head = node;
    } else {
      current = head;
      //循环列表，找到链表最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项,将其next赋值为node，建立链接
      current.next = node;
    }
    length++;
  };

  //链表指定位置插入元素
  this.insert = function (position, element) {
    //检查指定位置是否越界
    if (position > -1 && position <= length) {
      let node = new Node (element);
      let current = head;
      let index = 0;
      let previous;
      //插入第一位
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //找到指定插入位置
        node.next = current;
        previous.next = node;
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
      let current = head, previous, index = 0;
      //移除第一项
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项连接起来,跳过current，从而将current移除
        previous.next = current.next;
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
    let position = this.indexOf (element);
    return this.removeAt (position);
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
    console.log (this.toString ());
  };
  //#endregion
}
