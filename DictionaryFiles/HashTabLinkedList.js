//创建链表基本数据结构
function LinkedList() {
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
        let node = new Node(element);
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
            let node = new Node(element);
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
            let current = head,
                previous, index = 0;
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

//散列表之分离链接
function HashTableLinkList() {
    //散列表内部存储数据  以数组为例
    let tab = [];
    //定义散列表私有方法
    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % 37;
    };

    //新增辅助类
    let ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    }
    //定义散列表公开方法

    //添加元素
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (tab[position] == undefined) {
            //如果当前位置为undefined 则为该位置创建链表对象
            tab[position] = new LinkedList();
        }
        //链表追加键值 
        tab[position].append(new ValuePair(key, value));
    };

    //根据键值从散列表中删除值
    this.remove = function (key) {
        let position = loseloseHashCode(key);
        if (tab[position] != undefined) {
            var current = tab[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    tab[position].remove(current.element);
                    if (tab[position].isEmpty()) {
                        tab[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //检查是否为第一个元素或者最后一个元素
            if (current.element.key === key) {
                tab[position].remove(current.element);
                if (tab[position].isEmpty()) {
                    tab[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };

    //返回根据键值检索的特定值
    this.get = function (key) {
        let position = loseloseHashCode(key);
        //判断当前位置是否含有值
        if (tab[position] != undefined) {
            //遍历链表寻找键值
            //保存当前位置链表的头结点
            var current = tab[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            //检查的元素在当前位置链表的头部或尾部
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };
}