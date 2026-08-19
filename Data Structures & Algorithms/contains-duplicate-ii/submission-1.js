class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let s = new Set();
        let l = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i - l > k ) {
                s.delete(nums[l]);
                l++;
            }

            if (s.has(nums[i])) return true;
            s.add(nums[i]);

        }
        return false;
    }
}
