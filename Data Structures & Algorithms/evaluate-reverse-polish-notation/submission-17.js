class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let result = Number(tokens[0]);
        for (let i = 0; i < tokens.length; i++) {
            if (["+", "-", "/", "*"].includes(tokens[i])) {
                let item1 = stack.pop();
                let item2 = stack.pop();
                result = eval(`(${item2}) ${tokens[i]} (${item1})`);
                stack.push(Math.trunc(result));
            } else {
                stack.push(tokens[i]);
            }
        }
        return Math.trunc(result);
    }
}
