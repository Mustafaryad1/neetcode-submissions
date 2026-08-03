class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let r = heights.length - 1;
        let l = 0;
        let max = 0;
        while (l < r) {
            max = Math.max((r - l) * Math.min(heights[r], heights[l]), max)
            if (heights[r] > heights[l]) l++;
            else r--;

        }
        return max;
    }
}
