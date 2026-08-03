class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let strsMapper = {};
        for (let str of strs) {
            let chars = new Array(26);
            chars.fill(0);
            for (let i = 0; i < str.length; i++) {
                chars[str.charCodeAt(i)-97] += 1;
            }
            let key =  chars.join(",");
            if(!strsMapper[key]) strsMapper[key] = [str]
            else strsMapper[key].push(str)
        }
        return Object.values(strsMapper)
    }
}
