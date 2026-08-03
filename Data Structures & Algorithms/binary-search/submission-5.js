class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let r = 0;
        let l = nums.length - 1;

        while (r <= l) {
            let mid = l + Math.floor((r - l) / 2);
            console.log(mid)
            if (nums[mid] == target) return mid;
            else if (nums[mid] > target) l = mid-1;
            else r = mid + 1;
        }
        return -1;
    }
}
