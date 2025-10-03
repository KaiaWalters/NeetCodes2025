class Solution {

    // I had to find the solution for this problem 
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height.length) {
            return 0;
        }
        let n = height.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
            let leftMax = height[i];
            let rightMax = height[i];

            for (let j = 0; j < i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            for (let j = i + 1; j < n; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            res += Math.min(leftMax, rightMax) - height[i];
        }
        return res;
    }
}

