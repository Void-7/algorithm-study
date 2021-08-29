/**
 * @param {number[]} nums
 * @return {number}
 * @summary 实际上这就是双指针中的快慢指针。在这里快指针是读指针， 慢指针是写指针。从读写指针考虑， 我觉得更符合本质。
 */

var removeDuplicates = function (nums) {
  // // 双指针 没见过的就搬过来
  let slowP = 0
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++
      nums[slowP] = nums[fastP]
    }
  }

  return slowP + 1
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
