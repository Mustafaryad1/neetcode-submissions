class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let newArr = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] == newArr[newArr.length - 1]) continue;
            newArr.push(nums[i])
        }
        for (let i = 1; i < newArr.length; i++) {
            nums[i] = newArr[i];
        }

        return newArr.length;
    }
}
