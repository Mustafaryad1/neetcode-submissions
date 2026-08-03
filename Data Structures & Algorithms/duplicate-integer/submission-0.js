class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checker=new Set();
        for(let i=0;i<nums.length;i++){
            if(checker.has(nums[i])) return true;
            checker.add(nums[i]);
        }
        return false;
    }
}
