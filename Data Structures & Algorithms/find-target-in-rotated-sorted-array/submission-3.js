class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r )/ 2);
            let midValue = nums[mid];
            if (midValue == target) return mid;
            if (nums[l] <= midValue) {
                if (target >= nums[l] && target < midValue) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (target > midValue && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
}
