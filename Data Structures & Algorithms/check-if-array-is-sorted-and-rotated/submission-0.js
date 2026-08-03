class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let countFail = 0;
        let count = 1;
        let n = nums.length;
        for (let i = 1; i < nums.length * 2; i++) {
            if (nums[i % n] >= nums[(i - 1) % n]) {
                count++;
                continue;
            } else {
                countFail += 1;
                if (count == n) return true;
                count = 1;
            }
        }
        console.log("count", count);
        return count == n;
    }
}
