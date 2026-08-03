class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.min = Math.min(this.min, val);
        this.stack.push([val, this.min]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min = this.stack.length > 0 ? this.stack[this.stack.length - 1][1] : Infinity;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length) {
            return this.stack[this.stack.length - 1][0];
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
