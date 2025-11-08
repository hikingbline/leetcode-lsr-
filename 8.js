//滑动窗口问题
//8 无重复字符的最长字串
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

// 定义函数，参数s为输入字符串，返回无重复字符的最长子串长度
var lengthOfLongestSubstring = function (s) {
  // 创建Map对象，用于存储字符最后出现的索引（键：字符，值：最新索引）
  let map = new Map();
  // 滑动窗口左边界，初始化为0
  let left = 0;
  // 记录最长无重复子串的长度，初始化为0
  let maxLength = 0;
  // 遍历字符串，right作为滑动窗口右边界，从0递增到字符串末尾
  for (let right = 0; right < s.length; right++) {
    // 判断当前字符s[right]是否在当前窗口内重复：
    // 1. 该字符之前出现过（map中存在）
    // 2. 最后出现的位置在当前左边界左侧或等于左边界（即在当前窗口内）
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      // 若重复，将左边界移到该字符上一次出现位置的下一位，确保窗口内无重复
      left = map.get(s[right]) + 1;
    }
    // 更新当前字符在map中的位置为当前索引right（记录最新位置）
    map.set(s[right], right);
    // 计算当前窗口长度（right - left + 1），与历史最大值比较并更新
    maxLength = Math.max(maxLength, right - left + 1);
  }
  // 返回最长无重复子串的长度
  return maxLength;
};
