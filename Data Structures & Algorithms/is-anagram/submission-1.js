class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        let freq_s = {};
        let freq_t = {};
        for(let i=0;i<s.length;i++){
            if(freq_s[s[i]]) freq_s[s[i]]+=1;
            else freq_s[s[i]]=1
             if(freq_t[t[i]]) freq_t[t[i]]+=1;
            else freq_t[t[i]]=1;
        }
        for(let char in freq_t){
            if(freq_t[char]!= freq_s[char]) return false;
        }
      return true;
    }
}
