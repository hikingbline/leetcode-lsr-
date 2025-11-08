//子串问题
//10-和为K的子数组
//给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
//子数组是数组中元素的连续非空序列。

// 前缀和概念：设 prefixSum[i] 表示数组前 i 个元素的和。
// 那么子数组 nums[j..i] 的和为 prefixSum[i] - prefixSum[j-1]。
// 我们需要找到满足 prefixSum[i] - prefixSum[j-1] = k 的 (i, j) 对的数量。

// 哈希表优化：用哈希表 map 记录每个前缀和出现的次数。
// 初始时，prefixSum[0] = 0 出现 1 次（对应子数组从第一个元素开始的情况）。
// 遍历数组时，计算当前前缀和 currentSum，然后查看 currentSum - k 是否在哈希表中，
// 若在，则累加其出现次数。同时将当前前缀和的出现次数在哈希表中更新。

var subarraySum = function (nums, k) {
  const map = new Map(); // 创建哈希表，用于存储前缀和及其出现次数
  map.set(0, 1); // 初始化前缀和为0的情况，出现1次（表示不选任何元素时前缀和为0）

  let count = 0; // 记录满足条件的子数组个数
  let prefixSum = 0; // 记录当前的前缀和

  // 遍历数组中的每个元素
  for (const num of nums) {
    prefixSum += num; // 更新当前前缀和

    // 检查是否存在前缀和为 (当前前缀和 - k) 的情况
    // 如果存在，说明从那个位置到当前位置的子数组和为k
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k); // 累加所有满足条件的子数组个数
    }

    // 更新当前前缀和的出现次数
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count; // 返回满足条件的子数组总数
};