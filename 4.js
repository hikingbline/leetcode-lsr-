//双指针问题
//4. 移动零
/* 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let  moveZeroes = function (nums) {
  let left = 0;
  // 遍历数组
  for (let right = 0; right < nums.length; right++) {
    // 如果当前元素不为 0
    if (nums[right] !== 0) {
      // 交换当前元素和左指针指向的元素
      [nums[right],nums[left]] = [nums[left],nums[right]]
      // 左指针右移
      left++;
    }
  }
};
