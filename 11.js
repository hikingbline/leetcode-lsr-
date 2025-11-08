//11-滑动窗口的最大值
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。
// 滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
 let res = [];
    let que = []; // 队列最多容纳k个数
    for(let i = 0; i < nums.length; i++) {
        if(que.length === 0) que.push(nums[i]);
        else { // 维护队列
            // 出队列就两种情况
            // 1、 队头元素不在窗口（从队头出）
            // 2、 当前元素大于队尾元素（从队尾出）
            if(i - k >= 0 && nums[i - k] === que[0]) que.shift(); // 当队头元素出窗口时，弹出
            // 当前元素若大于队尾元素，则移出，直到遇到小于的元素或者队列空了，进队
            while(que.length > 0 && nums[i] > que[que.length - 1]){
                que.pop();
            }
            que.push(nums[i]);
        }
        // 当滑动完k个元素之后开始提取队头元素
        if(i >= k - 1) res.push(que[0]);
    }
    return res;
};