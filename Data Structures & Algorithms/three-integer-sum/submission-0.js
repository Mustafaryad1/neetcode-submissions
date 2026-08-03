class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let nums_map = {}
        let result = []
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        let hash_key = [nums[i], nums[j], nums[k]].sort().join('')
                        if (nums_map[hash_key]) continue;
                        nums_map[hash_key] = [nums[i], nums[j], nums[k]]
                        result.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
        return result
    }
}
