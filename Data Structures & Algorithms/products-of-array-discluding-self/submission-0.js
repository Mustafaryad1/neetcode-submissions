class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix_products = Array.from({ length: nums.length });
        const postfix_products = Array.from({ length: nums.length });
        this.prefix(nums, prefix_products)
        this.postfix(nums, postfix_products)
        let result = Array.from({ length: nums.length })
        // [1,2,8,48]
        // [1,48,24,6]
        console.log(prefix_products)
        console.log(postfix_products)
        for (let i = 0; i < result.length; i++) {
            let prefix = 1, postfix = 1;
            if (i - 1 >= 0) prefix = prefix_products[i - 1];
            if (i + 1 < result.length) postfix = postfix_products[i + 1]
            console.log(prefix,'pre')
            console.log(postfix,'post')
            result[i] = prefix * postfix;
        }

        return result

    }
    prefix(nums, prefix_products) {
        let prefix = 1;
        let i = 0;
        for (const num of nums) {
            prefix_products[i] = num * prefix;
            i++;
            prefix *= num;
        }
    }
    postfix(nums, postfix_products) {
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            postfix_products[i] = nums[i] * postfix;
            postfix *= nums[i];
        }
    }

}
