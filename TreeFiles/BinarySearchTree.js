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
        return searchNode(root, key);
    };

    //检索一个特定值私有辅助函数
    var searchNode = function (node, key) {
        //判断当前节点是否为null
        if (node != null) {
            if (key < node.key) {
                searchNode(node.left, key);
            } else if (key > node.key) {
                searchNode(node.right, key)
            } else {
                //找到指定节点
                return true;
            }
        } else {
            return false;
        }
    };

    //通过中序遍历方式遍历所有节点, 调用回调函数输出当前节点键值
    this.inOrderTraverse = function (callBackFunc) {
        inOrderTraverseNode(callBackFunc);
    };

    //实现中序遍历私有辅助函数
    var inOrderTraverseNode = function (node, callBackFunc) {
        //判断当前节点是否为空,作为递归函数的终止条件
        if (node != null) {
            //遍历左子树
            inOrderTraverseNode(node.left, callBackFunc);
            callBackFunc(node.key);
            //遍历右子树
            inOrderTraverseNode(node.right, callBackFunc);
        }
    };

    //通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function (callBackFunc) {
        preOrderTraverseNode(callBackFunc);
    };

    //先序遍历私有辅助函数,递归实现
    var preOrderTraverseNode = function (node, callBackFunc) {
        //判断当前节点是否为null
        if (node != null) {
            callBackFunc(node.key);
            preOrderTraverseNode(node.left, callBackFunc);
            preOrderTraverseNode(node, right, callBackFunc);
        }
    };

    //通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function () {
        postOrderTraverseNode(callBackFunc);
    };

    //实现后续遍历私有辅助函数，采用递归实现
    var postOrderTraverseNode = function (node, callBackFunc) {
        if (node != null) {
            postOrderTraverseNode(node.left, callBackFunc);
            postOrderTraverseNode(node.right, callBackFunc);
            callBackFunc(node.key);
        }
    };


    //返回树中最小键值的节点
    this.min = function () {
        return minNode(root);
    };

    //实现BST（二叉搜索树）最小值算法私有辅助函数
    //BST最小值处在最左的叶子节点，故找到最左边的叶子节点即可
    var minNode = function (node) {
        if (node) {
            //循环遍历左子树节点，直到左子树是叶子节点为止
            while (node && node.left != null) {
                node = node.left;
            }
            //找到左子树叶子节点
            return node.key;
        } else {
            //如果当前节点不存在
            return null;
        }
    };

    //返回树中最大键值的节点
    this.max = function () {
        return maxNode(root);
    };

    //实现BST(二叉搜索树)最大值算法的私有辅助函数
    //BST最大值处在右子树的叶子节点，故找到最右端的叶子节点即可
    var maxNode = function (node) {
        //判断当前节点是否存在
        if (node) {
            while (node && node.right != null) {
                node = node.right;
            }
            //找到最右端的叶子节点
            return node.key;
        } else {
            //当前节点不存在 直接返回null
            return null;
        }
    };

    //从树中移除某个键值的节点
    this.remove = function (key) {

    };

    //移除指定key的节点 私有辅助函数
    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            //key  === node.key情况
            //第一种情况: 移除一个叶子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //第二种情况:移除一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //第三种情况：移除一个有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    //私有辅助函数：检索指定节点的最小值
    var findMinNode = function (node) {
        if (node != null) {
            while (node && node.left != null) {
                node = node.left;
            }
            return node;
        }
    }
}

//回调函数
function printNodeValue(value) {
    //控制台输出各节点键值
    console.log(value);
}

//测试二叉树基本操作
var binaryTree = new BinarySearchTree();
//测试添加节点元素
binaryTree.insert(11);
binaryTree.insert(5);
binaryTree.insert(12);
binaryTree.insert(4);
binaryTree.insert(21);
binaryTree.insert(10);
binaryTree.insert(23);
binaryTree.insert(9);
binaryTree.insert(13);
binaryTree.insert(15);
binaryTree.insert(6);
binaryTree.insert(18);
binaryTree.insert(2);

//测试中序遍历
binaryTree.inOrderTraverse(printNodeValue);