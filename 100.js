//技巧问题
//100 寻找重复数
// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），
// 可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     // 步骤1：使用快慢指针找环的入口（类似链表找环）
    let slow = 0, fast = 0;
    // 第一次循环：快慢指针相遇，确定环存在
    do {
        slow = nums[slow];        // 慢指针走一步
        fast = nums[nums[fast]];  // 快指针走两步
    } while (slow !== fast);
    
    // 步骤2：重置慢指针为起点，再次同步移动快慢指针，相遇点即为重复数（环的入口）
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};