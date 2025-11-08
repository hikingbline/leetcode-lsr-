//滑动窗口问题
//9 找到字符串中所有字母异位词
// 给定两个字符串 s 和 p，
// 找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。

/**
 * 在字符串s中查找所有p的异位词子串的起始索引
 * @param {string} s 主字符串
 * @param {string} p 目标字符串
 * @return {number[]} 所有异位词子串的起始索引
 */

var findAnagrams = function (s, p) {
  const result = []; // 存储结果的数组
  const pCount = new Array(26).fill(0); // 统计p中每个字符出现的次数（26个字母）
  const sCount = new Array(26).fill(0); // 统计当前窗口中每个字符出现的次数
  const pLen = p.length; // 目标字符串p的长度
  const sLen = s.length; // 主字符串s的长度

  // 如果p比s长，直接返回空结果
  if (pLen > sLen) return result;

  // 统计p的字符频率
  // 将字符映射到0-25的索引（a->0, b->1, ..., z->25）
  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let left = 0; // 滑动窗口的左指针

  // 右指针遍历整个字符串s
  for (let right = 0; right < sLen; right++) {
    // 将右指针指向的字符加入窗口统计
    // charCodeAt获取字符的ASCII码，减去'a'的ASCII码得到0-25的索引
    sCount[s.charCodeAt(right) - "a".charCodeAt(0)]++;

    // 如果当前窗口长度超过了p的长度，需要收缩窗口
    // 窗口长度 = right - left + 1
    if (right - left + 1 > pLen) {
      // 将左指针指向的字符移出窗口统计
      sCount[s.charCodeAt(left) - "a".charCodeAt(0)]--;
      // 左指针右移，收缩窗口
      left++;
    }

    // 当窗口长度等于p的长度时，检查是否为异位词
    if (right - left + 1 === pLen) {
      // 比较两个频率数组是否完全相同
      // 使用join(',')将数组转换为字符串进行比较
      if (pCount.join(",") === sCount.join(",")) {
        // 如果频率相同，说明找到异位词，记录起始位置
        result.push(left);
      }
    }
  }
  return result;
};
