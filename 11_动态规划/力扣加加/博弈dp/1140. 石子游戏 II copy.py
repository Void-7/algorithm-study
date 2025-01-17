from typing import List
from functools import lru_cache
from itertools import accumulate

INF = 0x7FFFFFFF


class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        suffixSum = list(reversed(list((accumulate(reversed(piles))))))

        @lru_cache(None)
        def dfs(index: int, M: int) -> int:
            # 可以一口气拿完剩下的石头
            if index + 2 * M >= len(suffixSum):
                return suffixSum[index]

            res = -INF
            for i in range(1, 2 * M + 1):
                # 减去对手最多拿的
                res = max(res, suffixSum[index] - dfs(index + i, max(i, M)))
            return res

        return dfs(0, 1)


print(Solution().stoneGameII(piles=[2, 7, 9, 4, 4]))
