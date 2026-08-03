class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    calGap(l, r, height) {
        let s = 0;
        if (r - l < 2) {
            return 0;
        }
        for (let i = l + 1; i < r; i++) {
            s += Math.min(height[l], height[r]) - height[i];
        }
        return s;
    }

    trap(height) {
        let l = 0;
        let r = 0;
        let res = 0;
        while (r < height.length) {
            if (l == r) {
                r++;
                continue;
            }
            if (r > l && height[r] >= height[l]) {
                res += this.calGap(l, r, height);
                l = r;
            } else {
                r++;
            }
        }
        if (l < height.length - 1) {
            let last = l;
            l = height.length - 1;
            r = height.length - 1;
            while (r >= last) {
                if (l == r) {
                    r--;
                    continue;
                }
                if (r < l && height[r] >= height[l]) {
                    res += this.calGap(r, l, height);
                    l = r;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}
