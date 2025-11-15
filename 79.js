//贪心算法
//79-跳跃游戏II
// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。
// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。
// 换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：0 <= j <= nums[i] 且i + j < n
// 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。
/**
 * 计算到达数组末尾所需的最少跳跃次数
 * @param {number[]} nums - 每个元素表示在当前位置可跳跃的最大步数
 * @return {number} 最少跳跃次数
 */
var jump = function(nums) {
    // 记录跳跃的总次数，初始为0
    let jumpCount = 0;
    // 当前跳跃所能到达的最远边界（表示当前这一步跳完后，能覆盖的范围终点）
    let currentEnd = 0;
    // 记录在当前可覆盖范围内，能到达的最远位置（用于更新下一次跳跃的边界）
    let maxReach = 0;

    // 遍历数组，注意终止条件是 nums.length - 2（因为最后一个位置无需再跳）
    for (let i = 0; i < nums.length - 1; i++) {
        // 更新在当前可覆盖范围内能到达的最远位置
        // 即从当前位置 i 出发，能跳到 i + nums[i]，与之前的 maxReach 取最大值
        maxReach = Math.max(maxReach, i + nums[i]);

        // 当遍历到当前跳跃的边界时，说明需要进行一次新的跳跃
        // 例如：初始 currentEnd 为0，当 i=0 时触发第一次跳跃
        if (i === currentEnd) {
            jumpCount++; // 跳跃次数加1
            currentEnd = maxReach; // 将下一次跳跃的边界更新为当前能到达的最远位置
        }
    }

    // 返回最少跳跃次数
    return jumpCount;
};
 