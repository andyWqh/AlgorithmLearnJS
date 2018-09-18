//集合set类基本结构
function Set () { 
    //定义内部集合
    let items = {};
    //#region 内部方法
     this.has = function (value) {
         //return value in items;
         return items.hasOwnProperty(value);
       }
    this.add = function (value) { 
        //添加元素前判断当前集合是否含该元素
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
     }
     this.remove = function (value) { 
         if(this.has(value)){
             delete items[value];
             return true;
         }
         return false;
      }
      this.clear = function(){
          //重置集合
          items = {};
      }
      this.size = function () { 
          //第一种方式  现代高级版本浏览器运行
          //return Object.keys(items).length;
          //第二种  适合所有浏览器
          let count = 0;
          for(let key in items){
              if(items.hasOwnProperty(key)){
                  ++count;
              }
          }
          return count;
       }
       this.values = function () {  
           let values = [];
           //第一种现代高版本浏览器适用
            // for(let i = 0,keys = Object.keys(items); i < keys.length; i++){
            //     values.push(items[keys[i]]);
            // }
           // 第二种  适用所有浏览器
           for(let key in items){
               if(items.hasOwnProperty(key)){
                   values.push(items[key]);
               }
           }
           return values;
       }
    //#endregion
   
    //#region 集合的并集，交集 差集和子集
    
    //并集
    this.union = function (otherSet) {  
        let unionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length ; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i =0 ;i < values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    
    //交集
    this.intersection = function (otherSet) {  
        let intersectionSet = new Set();
        let values = this.values();
        for(let i =0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    
    //差集
    this.difference  = function (otherSet) {
        let differenceSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
      }
     
      //子集
      this.subset = function (otherSet) {
          if(this.size() > otherSet.size()){
              return false;
          }
          let values = this.values();
          for(let i =0; i < values.length; i++){
              //当前集合有元素不在OtherSet集合内 则当前集合不是otherSet集合的子集
              if(!otherSet.has(values[i])){
                    return false;
              }
          }
          return true;
        }

    //#endregion
 }

$(function () { 
    //1.集合基本操作
    //添加元素
    let set = new Set();
    for(let i = 0; i < 10; i++){
        if(i % 2== 0){
            set.add(i*2);
        }
    }
    console.log("集合初始化后有{0}个元素,集合的元素为:{1}".format(set.size(), set.values().join(",")));
    //重置集合
    //set.clear();
    //console.log("集合重置有{0}个元素".format(set.size()))
    //移除元素
    //set.remove(4);
    //console.log("移除集合元素4后的元素为:{0}".format(set.values().join(',')));
    console.log("集合是否4：{0}".format(set.has(4)));
    //2.并集，交集，差集和子集
    let otherSet = new Set();
    for(let j = 0; j <= 5;j++){
        otherSet.add(j);
    }
    //并集
    let unionSet = set.union(otherSet);
    console.log("集合的并集结果:{0}".format(unionSet.values().join(',')));
    //交集
    let intersectionSet = set.intersection(otherSet);
    console.log("集合的交集结果:{0}".format(intersectionSet.values().join(',')));
    //差集
    let differenceSet = set.difference(otherSet);
    console.log("集合的差集结果:{0}".format(differenceSet.values().join(',')));
    //子集
    let subSet = set.subset(otherSet);
    console.log("set是否为otherSet的子集：{0}".format(subSet));
 });