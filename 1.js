//哈希表
// 1. 两数之和
/* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
你可以按任意顺序返回答案。 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//什么是哈希表
// 哈希表本质上是一种键值对（Key-Value Pair）存储结构，
//它通过一个特殊的函数（哈希函数）将 “键（Key）” 映射到数组的特定位置，从而实现数据的快速存取。
let twoSum = function (nums, target) {
  // 创建一个哈希表，用于存储数组元素值和对应的索引
  let  map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 计算需要找到的另一个数
    let  a  = target - nums[i];
    // 检查哈希表中是否存在这个数
    if (map.has(a)) {
      // 如果存在，返回这两个数的索引
      return [map.get(a), i];
    }
    // 如果不存在，将当前数和它的索引存入哈希表
    map.set(nums[i], i);
  }
  // 如果没有找到符合条件的两个数，返回空数组
  return [];
};
