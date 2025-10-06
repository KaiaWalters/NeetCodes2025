class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    //had to look up solution
    characterReplacement(s, k) {
        let count = {};
        let left = 0;
        let maxCount = 0;
        let result = 0;

        for (let right = 0; right < s.length; right++) {
            // Count current character
            count[s[right]] = (count[s[right]] || 0) + 1;
            maxCount = Math.max(maxCount, count[s[right]]);

            // Check if window is invalid
            let windowSize = right - left + 1;
            if (windowSize - maxCount > k) {
                count[s[left]]--;
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
