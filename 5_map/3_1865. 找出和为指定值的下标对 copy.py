#  总结
#  遍历小数组，利用哈希加速大数组
import collections
from typing import List


class FindSumPairs:
    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1, self.nums2 = nums1, nums2
        self.c2 = collections.Counter(nums2)

    # 累加 ，将一个正整数加到 nums2 中指定下标对应元素上。
    def add(self, index: int, val: int) -> None:
        self.c2[self.nums2[index]] -= 1
        self.nums2[index] += val
        self.c2[self.nums2[index]] += 1

    # 计数 ，统计满足 nums1[i] + nums2[j] 等于指定值的下标对
    def count(self, tot: int) -> int:
        res = 0
        for x in self.nums1:
            res += self.c2[tot - x]
        return res

