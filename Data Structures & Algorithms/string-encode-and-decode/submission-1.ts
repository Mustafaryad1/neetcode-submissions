class Solution {
    /**
     * @param {string[]}
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = [];
        for (let index in strs) {
            let encoded = "";
            for (let char of strs[index]) {
                encoded += char.charCodeAt(0) + "-";
            }
            // Use a special marker for empty strings to distinguish them from an empty list
            if (strs[index] === "") encoded = "EMPTY";
            res.push(encoded);
        }
        return res.join(",");
    }

    /**
     * @param {string}
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "") return [];
        const strs = str.split(",");
        const res = [];
        for (let s of strs) {
            if (s === "EMPTY") {
                res.push("");
                continue;
            }
            let parts = s.split("-");
            if (parts[parts.length - 1] === "") parts.pop();
            let decoded = String.fromCharCode(...parts.map(Number));
            res.push(decoded)
        }
        return res;
    }
}