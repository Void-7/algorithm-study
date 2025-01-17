from typing import List
from functools import lru_cache

# How to find the biggest piramide with given top (x, y)? We need to look at points (x +1, y - 1) and (x+1, y+1) and find the biggest pyramides for these points:
# 1 <= m, n <= 1000
class Solution:
    def countPyramids(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        res = 0

        @lru_cache(None)
        def dfs(i, j, dr) -> int:
            if grid[i][j] == 1 and 0 <= i + dr < m and j > 0 and j + 1 < n and grid[i + dr][j] == 1:
                return min(dfs(i + dr, j - 1, dr), dfs(i + dr, j + 1, dr)) + 1
            return grid[i][j]

        for i in range(m):
            for j in range(n):
                res += max(0, dfs(i, j, 1) - 1)
                res += max(0, dfs(i, j, -1) - 1)

        return res


print(Solution().countPyramids(grid=[[0, 1, 1, 0], [1, 1, 1, 1]]))
# 输出：2
# 解释：
# 2 个可能的金字塔区域分别如上图蓝色和红色区域所示。
# 这个网格图中没有倒金字塔区域。
# 所以金字塔区域总数为 2 + 0 = 2 。
