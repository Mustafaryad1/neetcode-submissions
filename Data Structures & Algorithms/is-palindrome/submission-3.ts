class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumericChar(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }
    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;
        while (start <= end) {
            const isAlphNumericStart = this.isAlphanumericChar(s[start]);
            if (!isAlphNumericStart) {
                start++;
                continue;
            }
            const isAlphNumericEnd = this.isAlphanumericChar(s[end]);
            if (!isAlphNumericEnd) {
                end--;
                continue;
            }
            if (s[start].toLowerCase() != s[end].toLowerCase()) return false;
            start++;
            end--;
        }

        return true;
    }
}
