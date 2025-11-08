//双指针问题
//7 接雨水
//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
//计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
// 计算能接住的雨水总量
function trap(height) {
    let right = height.length - 1;  // 右指针，初始指向数组末尾
    let left = 0;                   // 左指针，初始指向数组起始位置
    let left_max = 0;               // 记录左指针遍历过的最大柱子高度
    let right_max = 0;              // 记录右指针遍历过的最大柱子高度
    let ans = 0;                    // 累计接住的雨水总量

    // 双指针向中间移动，直到相遇
    while (left < right) {
        // 左侧柱子更矮，优先处理左侧（左侧的短板由左侧最大值决定）
        if (height[left] < height[right]) {
            // 若当前左柱高度超过左侧最大值，更新左侧最大值（当前柱子无法接水）
            if (height[left] > left_max) {
                left_max = height[left];
            } else {
                // 否则，当前位置可接水量 = 左侧最大值 - 当前柱高，累加至结果
                ans += left_max - height[left];
            }
            left++;  // 左指针右移，处理下一个左侧位置
        } else {
            // 右侧柱子更矮或相等，优先处理右侧（右侧的短板由右侧最大值决定）
            // 若当前右柱高度超过右侧最大值，更新右侧最大值（当前柱子无法接水）
            if (height[right] > right_max) {
                right_max = height[right];
            } else {
                // 否则，当前位置可接水量 = 右侧最大值 - 当前柱高，累加至结果
                ans += right_max - height[right];
            }
            right--;  // 右指针左移，处理下一个右侧位置
        }
    }
    return ans;  // 返回总接水量
}