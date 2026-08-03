class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let str_map = new Map();
        
        for (let str of strs) {
            const sorted_str = str.split('').sort().join('');
            
            if (!str_map.has(sorted_str)) {
                str_map.set(sorted_str, [str]);
            } else {
                str_map.get(sorted_str).push(str);
            }
        }
        
        // Convert map values to array
        return [...str_map.values()];
    }
}