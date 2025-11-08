//哈希表
//2.字母异位词分组
/* 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
解释：
在 strs 中没有字符串可以通过重新排列来形成 "bat"。
字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。

/*
 * @param {string[]} strs
 * @return {string[][]}
 */
let  groupAnagrams = function (strs) {
  // 创建一个哈希表，键是排序后的字符串，值是字母异位词组成的数组
  let map = new Map();
  for (let str of strs) {
    // 将字符串转换为数组，排序后再转换为字符串，作为哈希表的键
    let sortedStr = str.split("").sort().join("");
    // 如果键不存在，就创建一个新的数组
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    // 将当前字符串添加到对应的字母异位词数组中
    map.get(sortedStr).push(str);
  }
  // 将哈希表中的值转换为数组，即为结果
  return Array.from(map.values());
};
