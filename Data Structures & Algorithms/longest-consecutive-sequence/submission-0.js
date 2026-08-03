class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map_nums = {};
        for (const i in nums) {
            map_nums[nums[i]] = i;
        }
        let max = 0;
        for (let num of nums) {
            let counter = 1;
            if (!map_nums[num - 1]) {
                while (map_nums[num + 1]) {
                    num += 1;
                    counter += 1;
                }
            }
            max = Math.max(counter, max);
        }
        return max;
    }
}
