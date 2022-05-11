declare const _default: {
    /**
     * 创建一个数组，值来自 object 的paths路径相应的值。
     */
    at: any;
    /**
     * 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。
     */
    defaults: any;
    /**
     * 返回最先被 predicate 判断为真值的元素 key
     */
    findKey: any;
    /**
     * 反向返回最先被 predicate 判断为真值的元素 key
     */
    findLastKey: any;
    /**
     * 遍历对象的自身和继承的可枚举属性
     */
    forIn: any;
    /**
     * 根据 object对象的path路径获取值
     */
    get: any;
    /**
     * 判断 path 是否为 obj 的属性
     */
    has: any;
    /**
     * 返回键值倒置后的对象
     */
    invert: any;
    /**
     * 调用object对象path上的方法。
     */
    invoke: any;
    /**
     * 该方法类似 assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。
     */
    merge: any;
    /**
     * 返回加工后的键值 key 对象
     */
    mapKeys: any;
    /**
     * 返回加工后的键值 value 对象
     */
    mapValues: any;
    /**
     * 返回忽略属性之外的object
     */
    omit: any;
    /**
     * 返回选中属性的对象
     */
    pick: any;
    /**
     * 设置 object对象中对应 path 属性路径上的值
     */
    set: any;
    /**
     * 移除 object对象中对应 path 属性路径上的值
     */
    unset: any;
    /**
     * 更新 object对象中对应 path 属性路径上的值
     */
    update: any;
};
export default _default;
