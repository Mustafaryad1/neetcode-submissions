class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const ROWS = image.length;
        const COLS = image[0].length;
        const sColor = image[sr][sc];
        if (sColor === color) return image;
        const dfs = (image, sr, sc, color) => {
            if (sr >= ROWS || sr < 0 || sc >= COLS || sc < 0 || image[sr][sc] != sColor) return;
            if (image[sr][sc] == sColor) image[sr][sc] = color;

            dfs(image, sr + 1, sc, color);
            dfs(image, sr - 1, sc, color);
            dfs(image, sr, sc + 1, color);
            dfs(image, sr, sc - 1, color);
        };
        dfs(image,sr,sc,color);
        return image;
    }
}
