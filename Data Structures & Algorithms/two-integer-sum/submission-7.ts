class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMapper = {};
        let i = 0;
        for (let num of nums) {
            const remain = target - num;
            console.log(numsMapper[remain])
            if (numsMapper[remain] !=undefined) return [numsMapper[remain], i];
            numsMapper[num] = i;
         
            i += 1;
        }
    }
}
