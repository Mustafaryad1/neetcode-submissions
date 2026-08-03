class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = Array.from({ length: temperatures.length }).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i];

            while (stack.length && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([temperatures[i], i]);

        }
        return result;

    }
}
