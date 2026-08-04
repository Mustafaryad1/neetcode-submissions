class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for (let i = 0; i < speed.length; i++) {
            cars.push([position[i], speed[i]])
        }
        // sort based on position
        cars.sort((a, b) => b[0] - a[0]);

        let stack = [];
        for (let i = 0; i < cars.length; i++) {
            let time = (target - cars[i][0]) / cars[i][1];
            if (stack.length) {
                let top = stack[stack.length - 1];
                if (time > top) stack.push(time);
            } else {
                stack.push(time)
            }

        }


        return stack.length;
    }
}
