(function(){
    // 自执行函数 不会污染全区环境

    console.info(11);
})();

(function(window){
    // 对于当前作用域块中， 如果讲window对象传入，就不会依全局对象了

    // 小括号 
    // 赋值操作 
    // 逻辑运算符
    // 数字运算符

})(window)

