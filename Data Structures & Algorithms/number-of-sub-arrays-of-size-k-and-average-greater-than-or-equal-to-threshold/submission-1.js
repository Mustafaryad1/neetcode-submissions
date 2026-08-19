class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let r = 0;
        let l = 0;
        let total = 0;
        let res = 0;

        while (r <= arr.length) {
            if (r - l < k) {
                total += arr[r];
                r++;
            } else {
                if (total / k >= threshold) res++;
                total -= arr[l];
                total +=arr[r]
                l++;
                r++;
            }
        }
        return res;
    }
}
