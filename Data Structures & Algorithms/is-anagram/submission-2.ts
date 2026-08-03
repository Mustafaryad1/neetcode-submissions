class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (!s || !t || s.length != t.length) return false;

        const sMapper = {};
        const tMapper = {};
        for (let c of s) {
            if (!sMapper[c]) sMapper[c] = 1;
            else sMapper[c] += 1;
        }
        for (let c of t) {
            if (!tMapper[c]) tMapper[c] = 1;
            else tMapper[c] += 1;
        }
        for(let c of s){
            if(tMapper[c] != sMapper[c]) return false;
        }
        return true;
    }
}
