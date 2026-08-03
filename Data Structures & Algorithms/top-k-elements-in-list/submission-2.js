class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let nums_map = {};
        for (let num of nums) {
           nums_map[num] = (nums_map[num]||0) +1;
        }
        const sorted_items = Object.entries(nums_map).sort(([, valA], [, valB]) => valB - valA);;
        let result = [];
       for(let i=0; i<k;i++){
        result.push(sorted_items[i][0])
       }
       console.log(sorted_items);
       return result
    }
}
