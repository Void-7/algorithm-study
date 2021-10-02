// 当同时满足如下条件时，你可以从下标 i 移动到下标 j 处：

import { ArrayDeque } from '../../../2_queue/Deque'

// i + minJump <= j <= min(i + maxJump, s.length - 1) 且
// s[j] == '0'.

function canReach(s: string, minJump: number, maxJump: number): boolean {
  const target = s.length - 1
  if (s[target] === '1') return false

  const jumps = s.split('')

  const queue = new ArrayDeque(100000)
  queue.push(0)
  let visitedMaxIndex = 0 // bfs优化

  while (queue.length) {
    const curIndex = queue.shift()!

    const min = Math.max(visitedMaxIndex + 1, curIndex + minJump)
    const max = Math.min(curIndex + maxJump, target)
    for (const next of range(min, max + 1)) {
      if (next >= 0 && next < jumps.length && jumps[next] === '0') {
        if (next === target) return true
        queue.push(next)
        jumps[next] = '2'
      }
    }

    visitedMaxIndex = Math.min(curIndex + maxJump, target)
  }

  return false

  function range(start: number, end: number): number[] {
    const res: number[] = []
    for (let i = start; i < end; i++) {
      res.push(i)
    }
    return res
  }
}

export {}

console.log(canReach('011010', 2, 3)) // true
