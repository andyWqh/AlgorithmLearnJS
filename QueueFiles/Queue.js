//#region 队列的使用
$ (function () {
  //实例化队列Queue对象
  let queue = new Queue ();
  //验证队列是否为空
  console.log (queue.isEmpty ());

  //队列添加元素
  queue.enqueue ('andyWqh');
  queue.enqueue ('Wileson');
  queue.enqueue ('Jack');
  //输出队列的元素长度
  console.log (queue.size ());
  //打印队列元素
  queue.print ();
  //移除队列队首元素
  queue.dequeue ();
  console.log (queue.size ());
  queue.print ();

  //实际应用案例 优先队列实现
  console.log("优先队列简单应用");
  let priorityQueue = new PriorityQueue ();
  //添加优先级元素
  priorityQueue.enqueue ('andyWqh', 1);
  priorityQueue.enqueue ('Lily', 2);
  priorityQueue.enqueue ('stone', 3);
  priorityQueue.enqueue ('Jhon', 1);
  console.log (priorityQueue.count);
  console.log (priorityQueue.tmep);
  //打印元素
  priorityQueue.print ();

  //循环队列简单实用  击鼓花游戏
  console.log ('循环队列简单应用');
  let nameList = ['John', 'Jack', 'andyWqh', 'Camila', 'Carl'];
  let winner = hotPotato (nameList, 4);
  console.log ('The Winner is {0}'.format (winner));
});
//#endregion

//#region 定义一个类对象模拟队列的存储原理
function Queue () {
  //定义数据来存储数据
  let data = [];
  //向队列添加元素
  this.enqueue = function (element) {
    data.push (element);
  };
  //移除队列第一个元素
  this.dequeue = function () {
    return data.shift ();
  };
  //返回队列第一个元素
  this.front = function () {
    //数组第一个元素 下标为0
    return data[0];
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
    console.log (data.join (','));
  };
}
//#endregion

//#region 优先队列实现类
function PriorityQueue () {
  let items = [];
  //定义一个设置优先级类
  function QueueElement (element, priority) {
    this.element = element;
    this.priority = priority;
  }
  let count = 0, tmep = 0;
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement (element, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.slice (i, 0, queueElement);
        added = true;
        count++;
        break;
      }
    }
    if (!added) {
      items.push (queueElement);
      tmep++;
    }
  };

  this.front = function () {
    return items[0];
  };

  this.dequeue = function () {
    return items.shift ();
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.size = function () {
    return items.length;
  };

  this.print = function () {
    for (let index = 0; index < items.length; index++) {
      const obj = items[index];
      console.log ('{0}-{1}'.format (obj.element, obj.priority));
    }
  };
}
//#endregion 循环队列
function hotPotato (nameList, num) {
  let queue = new Queue ();
  //将参与游戏者名字加入队列
  for (let index = 0; index < nameList.length; index++) {
    queue.enqueue (nameList[index]);
  }
  let eliminated = '';
  while (queue.size () > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue (queue.dequeue ());
    }
    eliminated = queue.dequeue ();
    console.log ('{0}在击鼓花游戏中被淘汰!'.format (eliminated));
  }
  return queue.dequeue ();
}
//#region
