import { BinaryTree } from '../Tree'
import { deserializeNode } from '../构建类/297二叉树的序列化与反序列化'
import { AddPropRecursively } from './116. 填充每个节点的下一个右侧节点指针常量空间'

type NodeWithParent = AddPropRecursively<BinaryTree, { parent?: BinaryTree | null }>
/**
 * @param {BinaryTree} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 * @description 返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。
 * @description 为了标记节点是否访问过，节点需要添加isVisited 但是为了方便让所有节点val不同
 * @description 先dfs找到这个点 并且增加parent节点(当成图) 然后从这个target出发bfs
 * @summary 这道题就是先把二叉树转化图,再用图的bfs,求得解
 */

const distanceK = function (root: NodeWithParent, target: number, k: number): number[] {
  if (!root) return []
  const res: number[] = []
  const targetNode = findTargetNode(root, null)
  if (!targetNode) return []
  dfs(targetNode, 0, new Set([targetNode.val]))
  return res

  function findTargetNode(
    root: NodeWithParent | null,
    parent: NodeWithParent | null
  ): NodeWithParent | null {
    if (!root) return null
    root.parent = parent // 标记了parent 将有向图转无向图
    if (root.val === target) return root
    return findTargetNode(root.left, root) || findTargetNode(root.right, root)
  }

  function dfs(root: NodeWithParent | null, steps: number, visited: Set<number>): void {
    if (!root) return
    if (steps === k) {
      res.push(root.val)
      return
    }

    const next = [root.parent, root.left, root.right]
    for (const nextNode of next) {
      if (nextNode && !visited.has(nextNode.val)) {
        visited.add(nextNode.val)
        dfs(nextNode, steps + 1, visited)
      }
    }
  }
}

console.dir(distanceK(deserializeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])!, 5, 2), {
  depth: null,
})
// [ 1, 7, 4 ]
