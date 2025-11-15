//动态规划
//81- 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    // 初始化前两步的结果
    let prevPrev = 1; // 对应 f(1)
    let prev = 2;     // 对应 f(2)
    // 从3阶开始迭代计算
    for (let i = 3; i <= n; i++) {
        const current = prevPrev + prev; // f(i) = f(i-2) + f(i-1)
        // 更新前两步的值（解构赋值简化写法）
        [prevPrev, prev] = [prev, current];
    }
    return prev;
};

 