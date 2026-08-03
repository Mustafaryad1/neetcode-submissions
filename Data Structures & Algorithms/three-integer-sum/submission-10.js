class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        nums.sort((a, b) => a - b);
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let r = nums.length - 1;
            let l = i + 1;
            while (l < r) {
                const sum = nums[i] + nums[r] + nums[l];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++
                } else {
                    result.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        };
        return result;
    }
}

