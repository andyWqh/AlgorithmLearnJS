$(function () {

});

//创建散列表数据结构
function HashTable() {
    //散列表内部存储数据  以数组为例
    let tab = [];
    //定义散列表私有方法
    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.lenth; i++) {
            hash = hash + key.chatCodeAt(i);
        }
        return hash % 37;
    };
    //定义散列表公开方法
    //向散列表新增或者更新键值
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' -' + key);
        tab[position] = value;
    };

    //根据键值从散列表中删除值
    this.remove = function (key) {
        tab[loseloseHashCode(key)] = undefined;
    };

    //返回根据键值检索的特定值
    this.get = function (key) {
        return tab[loseloseHashCode(key)];
    };
}