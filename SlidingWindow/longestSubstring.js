class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let window = []
        let solution = 0 
        let i = 0 

        while( i < s.length) {
            if(!window.includes(s[i])) {
                window.push(s[i])
                i++
            }else {
                solution = Math.max(solution, window.length)
                window = []
            }
        }

        return solution
    }
}
