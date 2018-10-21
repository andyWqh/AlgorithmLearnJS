 //#region 字典基本操作
 $(function () {
     let dict = new Dictionary();
     dict.set("andyWqh", "andyWqh@163.com");
     dict.set("John", "john@gmail.com");
     dict.set("tom", 'tomJosns@qq.com');

     //输出指定键值
     console.log(dict.has("andyWqh"));
     //字典的长度
     console.log("字典长度:{0}".format(dict.size()));
     console.log("字典所有键:"+dict.keys());
     console.log("字典键值:" + dict.values());

    //删除指定键
    dict.delete('andyWqh');
    console.log(dict.size());
    console.log(dict.keys());
    console.log(dict.getItems());
    
 });
 //#endregion

 //#region 字典基本数据结构封装类
 function Dictionary() {
     //申明一个Object对象存储数据
     var items = {};


     //校验指定的key值是否存在字段中，存在则返回true,不存就返回false
     this.has = function (key) {
         return items.hasOwnProperty(key);
     }

     //字典添加或者更新键值对值
     this.set = function (key, value) {
         return items[key] = value;
     }

     //根据key删除字典键值对
     this.delete = function (key) {
         //当字典存在指定键值时才使用delete操作符进行删除
         if (this.has(key)) {
             delete items[key];
             return true;
         }
         return false;
     }
     //根据key获取字典键值对属性
     this.get = function (key) {
         return this.has(key) ? items[key] : undefined;
     }

     //将字典中所有键值名以数组的形式返回
     this.keys = function () {
         //Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性
         return Object.keys(items);
     }

     //将字典中所有数值以数组的形式返回
     this.values = function () {
         var values = [];
         for (let key in items) {
             values.push(items[key]);
         }
         return values;
     }

     //清空字典数据进行初始化
     this.clear = function () {
         items = {};
     }
     //字典的长度
     this.size = function () {
         return Object.keys(items).length;
     }
     //获取字典内部Items
     this.getItems = function () {
         return items;
     }
 }
 //#endregion