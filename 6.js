//双指针问题
//6 三数之和
// 给你一个整数数组 nums ，判断是否存在三元组[nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
// 请你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 寻找数组中所有不重复且和为0的三元组
 * @param {number[]} nums - 输入的整数数组
 * @return {number[][]} - 返回所有满足条件的三元组数组
 */
var threeSum = function(nums) {
  // 先对数组进行升序排序，便于后续双指针操作和去重
  nums.sort((a, b) => a - b);
  // 用于存储结果的数组
  let ans = [];
  
  // 外层循环：固定三元组中的第一个元素（nums[i]）
  for (let i = 0; i < nums.length; i++) {
    // 若当前元素大于0，由于数组已排序，后续元素都更大，三数之和不可能为0，直接跳出循环
    if (nums[i] > 0) break;
    // 跳过重复的第一个元素，避免出现重复三元组
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    // 双指针初始化：左指针指向i的下一个元素，右指针指向数组末尾
    let left = i + 1;
    let right = nums.length - 1;
    
    // 当左右指针未相遇时，继续寻找可能的三元组
    while (right > left) {
      // 计算当前三数之和
      let item = nums[i] + nums[left] + nums[right];
      
      if (item === 0) {
        // 三数之和为0，将当前三元组加入结果数组
        ans.push([nums[i], nums[left], nums[right]]);
        
        // 跳过左指针后续的重复元素，避免重复三元组
        while (nums[left] === nums[left + 1]) left++;
        // 跳过右指针前面的重复元素，避免重复三元组
        while (nums[right] === nums[right - 1]) right--;
        
        // 左右指针同时移动，继续寻找新的可能组合
        right--;
        left++;
      } else if (item > 0) {
        // 三数之和大于0，说明右指针指向的元素过大，左移右指针
        right--;
      } else {
        // 三数之和小于0，说明左指针指向的元素过小，右移左指针
        left++;
      }
    }
  }
  
  // 返回所有满足条件的三元组
  return ans;
};