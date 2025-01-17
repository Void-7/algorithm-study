/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const stack = []
  let count = 0
  for (const num of pushed) {
    stack.push(num)
    while (stack.length && stack[stack.length - 1] === popped[count]) {
      stack.pop()
      count++
    }
  }

  return stack.length === 0
}

// true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
// false
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
