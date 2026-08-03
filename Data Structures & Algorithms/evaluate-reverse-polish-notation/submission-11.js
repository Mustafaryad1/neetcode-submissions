class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let result = 0;
        let i = 0;
        if(tokens.length==1){
            return tokens[tokens.length-1]
        }
        while (i < tokens.length) {

            if (["+", "-", "*", "/"].includes(tokens[i])) {
                let item1 = +stack[stack.length - 2];
                let item2 = +stack[stack.length - 1];
                if (tokens[i] == '+') {
                    result = item1 + item2
                } else if (tokens[i] == '-') {
                    result = item1 - item2;
                } else if (tokens[i] == '/') {
                    result = Math.trunc(item1 / item2)
                }
                else {
                    result = item1 * item2;
                }
                stack.pop();
                stack.pop();
                stack.push(result);
            } else {
                stack.push(tokens[i])
            }

            i++;

        }
    
        return result;
    }
}
