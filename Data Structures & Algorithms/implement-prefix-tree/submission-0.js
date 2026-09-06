class TrieNode {
    constructor() {
        this.word = false;
        this.childern = {};
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.childern[c]) {
                cur.childern[c] = new TrieNode();
            }
            cur = cur.childern[c];
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.childern[c]) return false;
            cur = cur.childern[c];
        }
        return cur.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            if (!cur.childern[c]) return false;
            cur = cur.childern[c];
        }
        return true;
    }
}