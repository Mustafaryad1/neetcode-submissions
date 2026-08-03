class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            while (start < end && !/^[a-zA-Z0-9]$/.test(s[start])) {
                start++;
            }
            while (start < end && !/^[a-zA-Z0-9]$/.test(s[end])) {
                end--;
            }
            if (s[start].toLocaleLowerCase() != s[end].toLocaleLowerCase()) return false;
            start++;
            end--;

        }

        return true;
    }
}
