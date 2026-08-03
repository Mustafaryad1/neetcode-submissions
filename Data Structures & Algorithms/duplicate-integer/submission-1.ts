class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const exited = {}
        for(let num of nums){
            if (exited[num]) return true;
            exited[num]=1
        }
        return false;
    }
}
