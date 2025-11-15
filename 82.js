//动态规划
//82-杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 初始化动态规划数组（存储杨辉三角的所有行）
    const dp = [];
    
    // 处理初始状态：第0行只有1个元素[1]
    if (numRows >= 1) {
        dp.push([1]);
    }
    
    // 从第1行开始递推（i表示行索引，从1到numRows-1）
    for (let i = 1; i < numRows; i++) {
        // 当前行的长度为 i+1，初始化为全1（先处理边界）
        const row = new Array(i + 1).fill(1);
        // 计算中间元素（j从1到i-1，因为首尾已经是1）
        for (let j = 1; j < i; j++) {
            // 状态转移：当前元素 = 上一行左侧元素 + 上一行当前位置元素
            row[j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
        // 将当前行存入dp数组
        dp.push(row);
    }
    return dp;
};