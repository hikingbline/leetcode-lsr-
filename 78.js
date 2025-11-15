//贪心算法
//78-跳跃游戏
// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 初始化最远可达位置为 0（表示初始状态下能到达的最远索引）
  let maxReach = 0;

  // 遍历数组中的每个位置
  for (let i = 0; i < nums.length; i++) {
    // 如果当前索引 i 超过了目前能到达的最远位置 maxReach，说明无法到达当前位置
    // 因此不可能到达数组末尾，直接返回 false
    if (i > maxReach) {
      return false;
    }

    // 更新最远可达位置：取当前的 maxReach 和「当前位置 i + 该位置能跳的最大步数 nums[i]」中的较大值
    // 这一步的意义是：从当前位置出发，能到达的最远位置是 i + nums[i]，与之前的最远位置比较并更新
    maxReach = Math.max(maxReach, i + nums[i]);

    // 如果更新后的最远可达位置已经大于等于数组的最后一个索引（nums.length - 1）
    // 说明已经可以到达数组末尾，直接返回 true
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  // 遍历结束后仍未到达数组末尾（理论上此处不会被执行，因循环中已处理所有情况）
  return false;
};
