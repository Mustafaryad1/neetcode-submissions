class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let c of s) {
            console.log(c)
            if (c == '(' || c == '[' || c == '{') stack.push(c);
            else {
                let top = stack[stack.length - 1];
                if ((top == '(' && c == ')') || (top == '[' && c == ']' )|| (top == '{' && c == '}')) stack.pop();
                else return false;
            }
        }
        if(stack.length) return false;
        return true
    }
}
