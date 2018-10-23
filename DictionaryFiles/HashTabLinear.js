//HashTable  线性探查
function HashTableLinear {
    //自定义节点属性
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    //定义散列表私有散列函数
    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % 37;
    };

    //创建更好或者更受欢迎的散列函数
    let dbjHashCode = function (key) {
        var hash = 5318;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    //内部辅助类
    var keyValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    };

    //添加元素
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (tab[position] == undefined) {
            //如果当前位置为undefined 则为该位置创建链表对象
            tab[position] = new keyValuePair(key, value);
        } else {
            var index = ++position;
            while (tab[index] != undefined) {
                index++;
            }
            //检索到index对应的位置为undefined
            tab[index] = new keyValuePair(key, value);
        }
    };

    //根据键值从散列表中删除值
    this.remove = function (key) {
        let position = loseloseHashCode(key);
        if (tab[position] != undefined) {
            if (tab[position].key == key) {
                return tab[position].value;
            } else {
                var index = ++position;
                while (tab[index] === undefined || tab[index].key != key) {
                    index++;
                }
                if (tab[index].key === key) {
                    return tab[index].value;
                }
            }
        }
        return undefined;
    };

    //返回根据键值检索的特定值
    this.get = function (key) {
        let position = loseloseHashCode(key);
        //判断当前位置是否存在值
        if (tab[position] != undefined) {
            if (tab[position].key == key) {
                return tab[position].value;
            } else {
                var index = ++position;
                while (tab[index] === undefined || tab[index].key != key) {
                    index++;
                }
                if (tab[index].key === key) {
                    return tab[index].value;
                }
            }
        }
        return undefined;
    };
};