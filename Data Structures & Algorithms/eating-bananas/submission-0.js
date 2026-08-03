class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max_pile = Math.max(...piles);
        let res = max_pile;
        let l = 1;
        let r = max_pile;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            let k = 0;
            for (let pile of piles) {
                k += Math.ceil(pile / mid);
            }
            if (k <= h) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1
            }

        }


        return res;

    }
}
