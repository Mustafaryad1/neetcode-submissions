class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let res = 0;
        while (start < end) {
            res = Math.max(res, (end - start ) * Math.min(heights[end], heights[start]));
            if (heights[start] < heights[end]) start++;
            else end--;
        }
        return res;
    }
}
