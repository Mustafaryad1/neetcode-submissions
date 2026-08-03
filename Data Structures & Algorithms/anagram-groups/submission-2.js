class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let str_map = {};
        let a_code = 'a'.charCodeAt(0);
        for (let str of strs) {
            let chars_counts = Array.from({ length: 26 }).fill(0);
            for(let char of str){
                chars_counts[char.charCodeAt(0)-a_code] +=1;
            }
            let key = chars_counts.join(',');
            if(str_map[key])str_map[key].push(str)
            else str_map[key] = [str];
        }
        console.log(str_map)
        return Object.values(str_map)
    }
}
