class NumArray {
    /**
     * @param {number[]}
     */
    constructor(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = nums[i] + this.prefix[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left]
    }
}
