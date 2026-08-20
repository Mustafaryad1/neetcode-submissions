class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = 0;
        let l = 0;
        let total = 0;
        for (let r = 0; r < nums.length; r++) {
            total += nums[r];
            while (total >= target) {
                length = Math.min(length == 0 ? (r - l + 1) : length, r - l + 1);
                total -= nums[l];
                l++;
            }
        }
        return length;
    }
}
