//二叉搜索树(BTS)
function BinarySearchTree() {
    //定义节点熟悉
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    //根节点
    var root = null;

    //定义相关树方法
    //向树中插入新节点
    this.insert = function (key) {
        var newNode = new Node(key);
        //判断当前是否空树
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //插入新节点实现算法
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                //递归实现查询左子树插入节点位置
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    //在树中查找指定键的节点,如果存在则返回True,如果不存在,则返回false
    this.search = function (key) {

    };

    //通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function () {

    };

    //通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function () {

    };

    //通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function () {

    };

    //返回树中最小键值的节点
    this.min = function () {

    };

    //返回树中最大键值的节点
    this.max = function () {

    };

    //从树中移除某个键值的节点
    this.remove = function (key) {

    };
}